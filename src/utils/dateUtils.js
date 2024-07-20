export const formatDateFromTimestamp = (timestamp) => {
    const date = new Date(timestamp * 1000); 
  
   
    const months = [
      'January', 'February', 'March', 'April', 'May', 'June',
      'July', 'August', 'September', 'October', 'November', 'December'
    ];
    const month = months[date.getMonth()];
    const day = date.getDate();
    const year = date.getFullYear();
    const hour = date.getHours().toString().padStart(2, '0'); 
    const minute = date.getMinutes().toString().padStart(2, '0'); 
  
    return `${month} ${day} ${year}, ${hour}:${minute}`;
  };

  export const formatTime = (val) => {
    const date = new Date(val * 1000); 
    const hour = date.getHours().toString().padStart(2, '0');
    const minute = date.getMinutes().toString().padStart(2, '0');
  
    return `${hour}:${minute}`; 
  };
  