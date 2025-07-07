export interface IContentfulImageData {
  fields?: {
    file: {
      url: string;
    };
    title: string;
  };
}

export const getContentfulImageData = (
  image: IContentfulImageData | undefined,
  getTypeData: {
    title?: boolean;
    image?: boolean;
  },
): string | undefined => {
  if (!image) return;

  if (getTypeData.title) {
    return image?.fields?.title || '';
  }

  if (getTypeData.image) {
    return image?.fields?.file?.url || '';
  }

  return undefined;
};
