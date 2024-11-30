if (!import.meta.env.MICROCMS_SERVICE_DOMAIN) {
  throw new Error('MICROCMS_SERVICE_DOMAIN is required');
}

// 環境変数にMICROCMS_API_KEYが設定されていない場合はエラーを投げる
if (!import.meta.env.MICROCMS_API_KEY) {
  throw new Error('MICROCMS_API_KEY is required');
}

const MICROCMS_SERVICE_DOMAIN = import.meta.env.MICROCMS_SERVICE_DOMAIN
const MICROCMS_API_KEY = import.meta.env.MICROCMS_API_KEY

export const getThemes = async (params: MicroCMSRequestParams = {}): Promise<ThemeResponse> => {

  const query = new URLSearchParams({
    ...params,
  })
  const res = await fetch(`https://${MICROCMS_SERVICE_DOMAIN}.microcms.io/api/v1/themes?${query}`, {
    headers: {
      'X-MICROCMS-API-KEY': MICROCMS_API_KEY,
    },
  });
  const data: ThemeResponse = await res.json();
  return data;
}


export const getAllThemes = async (params: MicroCMSRequestParams = {}): Promise<Theme[]> => {
  const themes: Theme[] = [];
  let totalCount = 0;

  do {
    const data = await getThemes({
      ...params,
      limit: '100',
    });
    themes.push(...data.contents);
    totalCount = data.totalCount;
  }
  while (themes.length < totalCount);

  return themes;
}

export const getThemeDetail = async (id: string): Promise<Theme> => {
  const res = await fetch(`https://${MICROCMS_SERVICE_DOMAIN}.microcms.io/api/v1/themes/${id}`, {
    headers: {
      'X-MICROCMS-API-KEY': MICROCMS_API_KEY,
    },
  });
  const data: Theme = await res.json();
  return data;
}


