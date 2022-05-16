interface IUserLoginResponse {
  user: {
    name: string;
    email: string;
  };
  access_token: string;
}

export { IUserLoginResponse };
