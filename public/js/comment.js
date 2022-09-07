
const commentHandler = async (event) => {
    event.preventDefault();

    const content= document.querySelector('#commentText').value.trim();

    if (content) {

      const response = await fetch('/api/comments', {
        method: 'POST',
        body: JSON.stringify({ content }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
      
        document.location.replace(`/`);
      } else {
        alert(response.statusText);
      }
    }
  };







document
.querySelector('.add-Comment')
.addEventListener('submit', commentHandler);