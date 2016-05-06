export const orderer = (key, order = 'ASC') => (
  (a,b) => {
    if (a[key] < b[key]) return order === 'ASC' ? -1 : 1;
    if (a[key] > b[key]) return order === 'ASC' ? 1 : -1;
    return 0;
  }
)

export const timestamp = () => +new Date()
