import React from 'react'
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import { storage } from '../firebase'

class EditProfile extends React.Component {

    constructor(props){
        super(props)
        this.state={
            files: '',
            url:''
        }
    }
    
    handleChange = (files) => {
        this.setState({
            files: files
        })
    };

    handleSave = (e) => {

        if(e.target.files[0]){
            const image = (e.target.files[0]);
            const uploadTask = storage.ref(`images/${image.name}`).put(image)
            uploadTask.on('state_changed',
                (snapshot) => {
                    console.log(snapshot);
                },
                (error) => {
                    console.log(error);
                },
                () => {
                    storage.ref('images').child(image.name).getDownloadURL().then(url => {
                        this.setState({url});
                    })
                }

            )

        }

    };
    


    render(){
        return(
            <>
                <Navbar/>

                    <div className="container">
                        <div>
                            <input type="file" onChange={this.handleSave}/>
                        </div>
                        
                        <div>
                            <img src={`${this.state.url}` || "https://image.flaticon.com/icons/png/512/16/16410.png"} alt="new-img" />
                        </div>
                        
                        

                        <button className="btn btn-primary" >Guardar</button>
                    </div>
                    
                <Footer/>
            </>
        )

    }

    

};

export default EditProfile;