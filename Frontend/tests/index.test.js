import Home from "../pages/index";
import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";


import  { useSession } from "next-auth/react"

import { SessionProvider } from "next-auth/react";

jest.mock("next-auth/react");




// Testing Test
test("Loads App without Errors", () => {
    useSession.mockReturnValueOnce([
      {
        user: {
          email: "suryatejareddy222@gmail.com",
        },
      },
      false,
    ])  

    render(<Home  session={useSession} />);
    const linkElement = screen.getByText(/Homepage/i);
    expect(linkElement).toBeInTheDocument();
    }
);

test("Is Login Accessible ?" , async () => {
    // useSession.mockReturnValueOnce([
    //   {
    //     user: {
    //       name: 'Surya Teja Reddy', 
    //       email: 'e20cse185@bennett.edu.in', 
    //       image: 'https://avatars.githubusercontent.com/u/74102066?v=4'
    //     },
    //   }
    // ])
    var session = useSession.mockReturnValueOnce([
      {
        user: {
          name: 'Surya Teja Reddy', 
          email: 'e20cse185@bennett.edu.in', 
          image: 'https://avatars.githubusercontent.com/u/74102066?v=4'
        },
      }
    ])
    render(<Home session={useSession} />);


    // render(<Home  session={useSession} />);
    
    // find element by id
    const loginButton = screen.getAllByText("Login")[0];
    fireEvent.click(loginButton);

    expect(loginButton).not.toBeNull();
})

