import { GoogleLogin, GoogleOAuthProvider } from "@react-oauth/google";

const clientId =
  "292715443811-q92n3h279jl2sg7f7i9ski7h3nurir69.apps.googleusercontent.com";
const GoogleBtn = () => {
  return (
    <GoogleOAuthProvider clientId={clientId}>
      <GoogleLogin
        width={"300px"}
        onSuccess={(credentialResponse) => {
          console.log(credentialResponse);
        }}
        onError={() => {
          console.log("failed");
        }}
      />
    </GoogleOAuthProvider>
  );
};

export default GoogleBtn;
