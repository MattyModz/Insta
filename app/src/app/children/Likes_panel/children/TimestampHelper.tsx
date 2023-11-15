const getInstagramPostDate = (timestamp: number) => {
  if (isNaN(Number(timestamp))) {
    return null;
  }

  const currentTime = Math.floor(Date.now() / 1000);
  const timeDifference = currentTime - timestamp;

  const minutes = Math.floor(timeDifference / 60);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);
  const weeks = Math.floor(days / 7);

  if (weeks > 0) {
    return weeks === 1 ? `${weeks} WEEKS AGO` : `${weeks} WEEKS AGO`;
  } else if (days > 0) {
    return days === 1 ? `${days} DAYS AGO` : `${days} DAYS AGO`;
  } else if (hours > 0) {
    return hours === 1 ? `${hours} HOURS AGO` : `${hours} HOURS AGO`;
  } else {
    return minutes <= 0 ? "NOW" : `${minutes} MINUTES AGO`;
  }
};

export default getInstagramPostDate;
