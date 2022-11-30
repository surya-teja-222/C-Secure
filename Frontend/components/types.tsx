export type headPropType = {
    title?: string;
    description?: string;
};

export type ServiceBlockType = {
    img: string;
    head: string;
    body: string;
};

export type CommentType = {
    username: string;
    userComment: string;
    hateStatus: 0|1|2;
};
