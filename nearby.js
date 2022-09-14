async function getContent() {
  try {
    const response = await fetch('http://localhost:4567/');
    const data = await response.json();

    console.log(data);


  } catch (error) {
    console.error(error);
    
  }

}
getContent();
