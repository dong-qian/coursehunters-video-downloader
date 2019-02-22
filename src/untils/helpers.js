export const formatRemainingTime = time => {
  return time > 60 ? `${Math.floor(time / 60)}m` : `${Math.floor(time)}s`;
};

export const formatBytes = (bytes, decimals) => {
  if (bytes === 0) return "0 Bytes";
  var k = 1024,
    dm = decimals || 2,
    sizes = ["Bytes", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"],
    i = Math.floor(Math.log(bytes) / Math.log(k));
  return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + " " + sizes[i];
};
