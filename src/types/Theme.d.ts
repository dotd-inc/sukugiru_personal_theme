type MicroCMSRequestParams = {
  limit?: string;
  offset?: string;
  orders?: string;
  q?: string;
  fields?: string;
  ids?: string;
  filters?: string;
  depth?: string;
}


type Theme = {
  id: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  revisedAt: string;
  entryId: number;
  theme1: string;
  theme2: string;
  theme3: string;
}

type ThemeResponse = {
  totalCount: number;
  offset: number;
  limit: number;
  contents: Theme[];
}