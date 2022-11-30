import { render, screen } from "@testing-library/react";
import Home from "../pages/index";
import "@testing-library/jest-dom";

jest.mock("next-auth/react");
// jest.mock("next/head", () => {
//     const ReactDOMServer = require("react-dom/server");
//     return {
//         __esModule: true,
//         default: ({
//             children,
//         }: {
//             children: Array<React.ReactElement> | React.ReactElement | null;
//         }) => {
//             if (children) {
//                 global.document.head.insertAdjacentHTML(
//                     "afterbegin",
//                     ReactDOMServer.renderToString(children) || ""
//                 );
//             }
//             return null;
//         },
//     };
// });
import { useSession, signIn, signOut } from "next-auth/react";

const mockUseSession = useSession as jest.Mock;
(signIn as jest.Mock).mockImplementation(() => jest.fn());
(signOut as jest.Mock).mockImplementation(() => jest.fn());

test("Validate SEO", () => {
    mockUseSession.mockReturnValue({
        status: "authenticated",
        data: {
            user: {
                name: "John Doe",
                email: "suryatejareddy222@gmail.com",
                image: "b",
            },
        },
    });
    render(<Home />);
    console.log(screen.getByText("Login"));
});
