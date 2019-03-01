export const formatRemainingTime = time => {
  return time > 60
    ? `${Math.floor(time / 60)} mins`
    : `${Math.floor(time)} secs`;
};

export const formatBytes = (bytes, decimals) => {
  if (bytes === 0) return '0 Bytes';
  var k = 1024,
    dm = decimals || 2,
    sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'],
    i = Math.floor(Math.log(bytes) / Math.log(k));
  return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
};

export const formatStatus = status => {
  return {
    total: formatBytes(status.size.total),
    transferred: formatBytes(status.size.transferred),
    speed: Math.floor(status.speed / 1024),
    remaining: formatRemainingTime(status.time.remaining),
    percentage: Math.floor(status.percent * 100),
  };
};
