export interface IUserData {
  page: number,
  per_page: number,
  total: number,
  total_pages: number,
  data: Array<IUser>,
  support: ISupport
}

export interface IUser {
  id: number,
  email: string,
  first_name: string,
  last_name: string,
  avatar: string,
  password: string
}

export interface ISupport {
  url: string,
  text: string
}