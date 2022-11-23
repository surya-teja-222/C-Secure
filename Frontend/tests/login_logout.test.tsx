import { render, screen } from "@testing-library/react";
import Home from "../pages/index";
import "@testing-library/jest-dom";

import userEvent from "@testing-library/user-event";

jest.mock("next-auth/react");
import { useSession, signIn, signOut } from "next-auth/react";

const mockUseSession = useSession as jest.Mock;
(signIn as jest.Mock).mockImplementation(() => jest.fn());
(signOut as jest.Mock).mockImplementation(() => jest.fn());

describe("Login", () => {
    const renderHome = async () => {
        const signInButton = screen.queryByRole("button", {
            name: "Login",
        });
        const signOutButton = screen.queryByRole("button", {
            name: "Sign out",
        });
        return {
            signInButton,
            signOutButton,
        };
    };

    test("Validate Log Out", async () => {
        const user = userEvent.setup();

        mockUseSession.mockReturnValue({
            status: "unauthenticated",
            data: null,
        });

        render(<Home />);

        const { signInButton, signOutButton } = await renderHome();

        expect(signInButton).toBeInTheDocument();
        expect(signOutButton).not.toBeInTheDocument();

        await user.click(signInButton as HTMLAnchorElement);

        expect(signIn).toHaveBeenCalledTimes(1);
    });

    test("Validate Login", () => {
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

        var k = screen.queryByRole("button", {
            name: "Login",
        });

        expect(k).not.toBeInTheDocument();
    });
});
