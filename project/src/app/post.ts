export interface Post
{
  ID: string,
  Country: string,
  CountryCode: string,
  Slug: string,
  NewConfirmed:number,
  TotalConfirmed: number,
  NewDeaths: number,
  TotalDeaths: number,
  NewRecovery: number,
  TotalRecovery: number,
  Date: Date;
}
