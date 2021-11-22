import React,{useState,useEffect} from 'react'
import "./Todo.css"
const Todo = () => {
    const getlocalstoredtask=()=>
    {
        const tasklists = localStorage.getItem("tasklists");
        if (tasklists) {
            return JSON.parse(tasklists);            
        }
        else
        return [];
    }
    const getlocalcounttitle= () =>{
        const countle = localStorage.getItem("countle");
        if (countle>0) {
            return JSON.parse(countle);    
        }
        return 0;
    }
    const [intasks,setintasks] = useState("");
    const [item,setitem] = useState(getlocalstoredtask());
    const [count,setcount]=useState(0);
    const [counttitle,setcounttitle]=useState(getlocalcounttitle());
    const [editeditem,setediteditem]=useState("");
    const [togbtn,settogbtn] = useState(false);
    // useEffect(() => {        
    //       document.title = `${counttitle} task left`;
    //      });
    const additems = () =>
    {
        if(!intasks)
        {
            alert("please add a task.");
            const inp = document.getElementById('inp');
            inp.focus();
        }
        else if(intasks && togbtn)
        {
            setitem(
                item.map((elem)=>{
                    if (elem.id===editeditem) {
                        return {...elem,name : intasks}
                    }
                    else{
                        return elem;
                    }
                })
            )
            setintasks("");
            settogbtn(false);
            setediteditem("");
        }
        else
        {
            setcount(count+1);
            const newintask={
                id : count,
                name : intasks
            }
            setitem([...item,newintask]);
            setintasks("");
            // setcounttitle(counttitle+1);
        }
    }
    // const edititem = (ind) =>
    // {
    //     const editem = item.find((elem)=>
    //     {
    //         return elem.id===ind;
    //     });
    //     // editeditem=item.ind;
    //     setintask(editem.name);
    //     setediteditem(ind);
    //     const inp = document.getElementById('inp');
    //     inp.focus();
    //     settogbtn(true);
    // }
    const deleteitem = (index) =>
    {
        const delitem=item.filter((elem)=>
        {
            return elem.id !== index;
        });
        setitem(delitem);
        setintasks("");
        settogbtn(false);
    //    counttitle = counttitle > 0 ? setcounttitle(counttitle-1) : 0;
        // if (counttitle > 0) {
        //     setcounttitle(counttitle-1);
        // }
        // else{
        //     setcounttitle(0);
        // }
    }
    const clear =()=>
    {
        if (counttitle===0) {
            alert("list is empty");
        }
        
                    setitem([]);
            setintasks("");
            setcounttitle(0);
        
    }
    useEffect(() => {
        localStorage.setItem("tasklists",JSON.stringify(item));
    }, [item])
    // useEffect(() => {
        // localStorage.setItem("countle",JSON.stringify(counttitle));
    // }, [counttitle])
    return (
        <div className="wholen">  
            
            <div className="main-div">
                <div className="child-div">
                    
                    
                    <div className="">                    
                        <div className="input-group input-group-sm mb-3">
                            <span className="input-group-text" id="inputGroup-sizing-sm">✍</span>
                            <input type="text" className="additems" value={intasks} onChange={(e) => setintasks(e.target.value)} id="inp" placeholder="Add an update here" />
                            {
                                togbtn ? <i className="far fa-edit editbtn" onClick={additems}></i> : <i className="fa fa-plus" onClick={additems}></i>
                            }
                        </div>
                    </div>
                    <div className="showitems">
                        {item.map((elem)=>{
                            return(
                            <div className="eachitem" key={elem.id}>
                            <h3>{elem.name}</h3>
                            <div className="todo-btn">
                                {/* <span><i className="far fa-edit edits" onClick={()=>edititem(elem.id)}></i></span> */}
                                <span><i className="fas fa-trash delet" onClick={()=>deleteitem(elem.id)}></i></span>
                            </div>
                        </div>
                            )
                        })}
                        
                    </div>
                    <div className="showitems">
                        {/* <button type="button" className="btn btn-success">Add To List</button> */}
                        <span><button type="button" onClick={clear} className="btn btn-danger">Clear List</button></span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Todo;
