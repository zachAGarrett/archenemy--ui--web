import React from "react";
import GoogleAnalytics from "@/lib/ga4/googleAnalytics";
import { UserProvider } from "@auth0/nextjs-auth0/client";
import "@/app/globals.css";
import { Divider, Flex } from "antd";
import { StyleProvider } from "@/components/StyleProvider";
import { ApolloWrapper } from "@/lib/apollo/apollo-client";

interface RootLayoutProps {
  children: React.ReactNode;
}

const RootLayout = ({ children }: RootLayoutProps) => {
  return (
    <html lang="en">
      <UserProvider>
        <body>
          <ApolloWrapper>
            <GoogleAnalytics />
            <StyleProvider>
              <Flex
                vertical
                style={{
                  height: "100%",
                  paddingRight: 10,
                  paddingLeft: 10,
                }}
              >
                {children}
                <Divider />
              </Flex>
            </StyleProvider>
          </ApolloWrapper>
        </body>
      </UserProvider>
    </html>
  );
};

export default RootLayout;
