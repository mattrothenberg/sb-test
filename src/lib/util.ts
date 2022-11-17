type BlocksMessage = "loaded";

export const postMessage = (
  type: BlocksMessage,
  payload: any,
  otherArgs = {}
) => {
  window.top?.postMessage(
    {
      type,
      payload,
      ...otherArgs,
    },
    "*"
  );
};
