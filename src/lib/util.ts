export const postMessage = (type: string, payload: any, otherArgs = {}) => {
  window.top?.postMessage(
    {
      type,
      payload,
      ...otherArgs,
    },
    "*"
  );
};
