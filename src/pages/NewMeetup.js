import { useHistory } from 'react-router-dom';
import NewMeetupForm from '../components/meetups/NewMeetupForm';

function NewMeetupPage(){
    const history = useHistory();
    function addMeetUpHandler(meetupData){
        fetch(
            'https://react-course-2-713b7-default-rtdb.firebaseio.com/meetups.json',
            {
                method: 'POST',
                body: JSON.stringify(meetupData),
                headers: {
                    'Content-Type': 'application/json'
                }
            }
        ).then(() => {
            history.replace('/');
        })
    }

    return <section>
        <h1>New Meetup Page</h1>
        <NewMeetupForm onAddMeetup={addMeetUpHandler} /> 
    </section>
}

export default NewMeetupPage;