import React from 'react';
import { useEffect, useCallback, useState } from 'react';
import { useParams, useHistory  } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { postingSong , updateSong } from '../../store/songs';
import { Link } from 'react-router-dom';
import "./SongForm.css";

//display all current songs in homepage
const SongForm = () => {
    const { id = null } = useParams()
    const history = useHistory();

    const dispatch = useDispatch();
    const objList = useSelector(state => state.songs);
    const [songToUpdate, setSongToUpdate] = useState(null);
    const [songUrl, setSongUrl] = useState(null);
    const [picUrl, setPicUrl] = useState(null);
    const [title, setTitle] = useState(null);

    const handleSubmit = async () => {
        if(id){

            await  dispatch(updateSong(id, { songUrl, picUrl, title }))
        }else{

          await  dispatch(postingSong({ songUrl, picUrl, title }))
        }
        history.push(`/`)
        // this.props.history.push('/adminpanel')
    }
    useEffect(() => {
        console.log("id*********", id, objList[id])
        if (objList[id]) {

            setSongUrl(objList[id].songUrl)
            setPicUrl(objList[id].picUrl)
            setTitle(objList[id].title)
        }

    }, [id]);

    return (
        <div className="songs-form">
            <div>
                <h2>Upload Your New Song Below.</h2>
                <form action="" onSubmit={(event) => { event.preventDefault(); }} className='uploadform'>
                    {/* <ul></ul> */}
                    <div className="input-wrapper">
                        <label for="title">Title</label>
                        <input type="text" name="title" required="" value={title} onChange={(e) => setTitle(e.target.value)} />
                    </div>
                    <div className={ id ? 'input-wrapper disabled' : "input-wrapper" }>
                        <label for="imageUrl">Image Url</label>
                        <input type="text" disabled={id ? true : false} name="imageUrl" required="" value={picUrl} onChange={(e) => setPicUrl(e.target.value)} />
                    </div>
                    <div className={  id ? 'input-wrapper disabled' : "input-wrapper" } >
                        <label for="songUrl">Song Url</label>
                        <input type="text" disabled={id ? true : false} name="songUrl" required="" value={songUrl} onChange={(e) => setSongUrl(e.target.value)} />
                    </div>
                    <div className="form-btn-wrapper">
                        <button  className="main-btn" onClick={handleSubmit}> {id ? "Update" : "Upload"}</button>
                        <a className="main-btn" href="/">Cancel</a>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default SongForm;