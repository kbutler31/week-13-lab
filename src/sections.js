let date = new Date()
 
            let singleUser = {
             name: 'John',
              time: date.toDateString(),
            }
 
 export default function section(){
    return(
        <section className="welcomeSection">
            <h1>Welcome, {singleUser.name}</h1>
            <p>Todays date is {singleUser.time}</p>
        </section>
    )
 }