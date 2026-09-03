
import { useState } from "react";
import axios from "axios"
import { useEffect } from "react";
import NotesCard from "./NotesCard";
function App() {
  const [data, setData] = useState({
    title: "",
    description: "",
  });
  const [updatenotes,setUpdateNotes]=useState(null)
const submitHandler = async (e) => {
  e.preventDefault();
  

  try {
    if(updatenotes){
     await  axios.patch(`http://localhost:3000/notes/updatenotes/${updatenotes}`,data)
     setUpdateNotes(null)
     getAllNotes()
     setData({
      title:"",description:""
     })
    }
    else{
    const response = await axios.post(
      "http://localhost:3000/notes/create",
      data
    );

    console.log(response.data);

    setData({
      title: "",
      description: "",
      
    });
    getAllNotes()
  }} catch (error) {
    console.log(error);
  }
};

  function changeHandler(e) {
    
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  }
    const [allNotes,setAllnotes]=useState([])


  const getAllNotes=async()=>{
   const notes= await axios.get("http://localhost:3000/notes/getallnotes")
setAllnotes(notes.data.data)

  }

  const deleteNotes=async (id)=>{
await axios.delete(`http://localhost:3000/notes/deletenotes/${id}`)
getAllNotes()
  }

  const updateNotes=(id)=>{

    const note = allNotes.find((note) => note._id === id);
setData({
  title:note.title,
  description:note.description,
})
setUpdateNotes(id)

  }
  useEffect(()=>{

    getAllNotes()
  },[])

  return (
    <div className="min-h-screen bg-black flex flex-row gap-10 justify-center px-4">
      <form
        onSubmit={submitHandler}
        className="w-full max-w-md space-y-5 rounded-2xl bg-zinc-900 p-6"
      >
        <h1 className="text-2xl font-bold text-white">
          Create Post
        </h1>

        {/* Title */}
        <div>
          <label className="mb-2 block text-sm font-medium text-white">
            Title
          </label>

          <input
            name="title"
            type="text"
            value={data.title}
            onChange={changeHandler}
            required
            placeholder="Enter title"
            className="w-full rounded-lg border border-zinc-700 bg-zinc-800 px-4 py-3 text-white outline-none placeholder:text-zinc-500 focus:border-yellow-400"
          />
        </div>

        {/* Description */}
        <div>
          <label className="mb-2 block text-sm font-medium text-white">
            Description
          </label>

          <textarea
            name="description"
            value={data.description}
            onChange={changeHandler}
            rows="5"
            required
            placeholder="Enter description"
            className="w-full resize-none rounded-lg border border-zinc-700 bg-zinc-800 px-4 py-3 text-white outline-none placeholder:text-zinc-500 focus:border-yellow-400"
          />
        </div>
{ updatenotes?
  <button 
          type="submit"
          className="w-full rounded-lg bg-yellow-400 px-4 py-3 font-semibold text-black transition hover:bg-yellow-300"
        >
          UPDATE
        </button>:  <button
          type="submit"
          className="w-full rounded-lg bg-yellow-400 px-4 py-3 font-semibold text-black transition hover:bg-yellow-300"
        >
          Submit
        </button>
}
      
      </form>
<div className="grid grid-cols-3 gap-10">
{
 allNotes.map((elem)=>{
          console.log(elem)
          return <NotesCard key ={elem._id} note={elem} deleteNotes={deleteNotes} updateNotes={updateNotes}/>
        })
      }
</div>
      
    </div>
  );
}

export default App;
