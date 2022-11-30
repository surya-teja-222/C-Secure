import os
import json
from dotenv import load_dotenv
import googleapiclient.discovery

load_dotenv()

os.environ["OAUTHLIB_INSECURE_TRANSPORT"] = "1"

api_service_name = "youtube"
api_version = "v3"
DEVELOPER_KEY = os.environ.get("DEVELOPER_KEY")


YOUTUBE = googleapiclient.discovery.build(
    api_service_name, api_version, developerKey = DEVELOPER_KEY)

MAX_COMMENT_RESULTS = 100
MAX_VIDEOS_RESULTS = 50

def reqPlaylistVideos(playlistId):
    request = YOUTUBE.playlistItems().list(
        part="contentDetails",
        maxResults=MAX_VIDEOS_RESULTS,
        playlistId=playlistId
    )

    response = request.execute()
    
    videos = []
    for item in response['items']:
        videoId = item['contentDetails']['videoId']
        videos.append(videoId)
    
    return videos



def reqCommentThreads(videoId, pageToken=None):
    request = YOUTUBE.commentThreads().list(
        part="snippet,replies",
        maxResults=MAX_COMMENT_RESULTS,
        textFormat="plainText",
        videoId=videoId, 
        pageToken = pageToken,
    )

    response = request.execute()
    return response

def filterJSON(response):
    items = response['items']

    comments_data = []
    profiles_data = []
    for item in items:
        try:
            comment = item['snippet']['topLevelComment']['snippet']['textDisplay']
            comment = comment.replace('\n', ' ')
            comments_data.append(comment)
            profiles_data.append(item['snippet']['topLevelComment']['snippet']['authorDisplayName'])

            if 'replies' in item:
               comment_replies= item['replies']['comments']
               for reply in comment_replies:
                    comment_reply = reply['snippet']['textDisplay']
                    comment_reply = comment_reply.replace('\n', ' ')
                    comments_data.append(comment_reply)
                    profiles_data.append(reply['snippet']['authorDisplayName'])
        except KeyError:
            print('textDisplay Key not Found!!')
    # print(comments_data[0])
    return comments_data, profiles_data

def get(url):

    rawResponse = []
    finalData = []
    finalNames = []


    Id = url.split('=')[-1]
    if(len(Id) == len(url)):
        Id = url.split('/')[-1]
    response = reqCommentThreads(Id)
    rawResponse.append(response)
    data,names = filterJSON(response)
    finalData.extend(data)
    finalNames.extend(names)

    try:
        totalPages = response['pageInfo']['totalResults']
        for _ in range(totalPages):
            
            if 'nextPageToken' not in response:
                break

            nextPageToken = response['nextPageToken']
            try:
                response = reqCommentThreads(Id, nextPageToken)
                rawResponse.append(response)
                data,names = filterJSON(response)
                finalData.extend(data)
                finalNames.extend(names)
            except:
                pass

    except KeyError:
        return []

    x = [ i for i in finalData if i != '']
    y = [ i for i in finalNames if i != '']
    return x , y


# if __name__ == "__main__":
#     url = "https://www.youtube.com/watch?v=ilj3q3DVl1g"
#     print(get(url))