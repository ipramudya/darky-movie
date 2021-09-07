// Convert time to hours and minutes
export const calcTime = (time) => {
   const hours = Math.floor(time / 60);
   const mins = time % 60;
   return `${hours}h ${mins}m`;
};
// Convert a number to money formatting
export const convertMoney = (money) => {
   const formatter = new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
   });
   return formatter.format(money);
};

export const randomNumber = (range) => {
   return Math.floor(Math.random() * range);
};

export const convertDate = (date) => {
   return new Date(date).toUTCString().split(' ').splice(0, 4).join(' ');
};
