            const addListData = () =>{
            // get all data 
            let name = document.getElementById('name').value;
            let phone = document.getElementById('phone').value;
            let work = document.getElementById('work').value;
            const id = Math.floor(Math.random() * 140);
            const newList = { id, name, phone, work };
            // create a data array 
            let allList = [];
            if(localStorage.getItem("eclList")){
                allList = JSON.parse(localStorage.getItem("eclList"));
            }
            allList.push(newList);
            // create a localStorage array 
            localStorage.setItem("eclList",JSON.stringify(allList));
            fetchData();
        }
        
        const fetchData = () => {
            const tableData = document.getElementById('tableData');
            const allList = JSON.parse(localStorage.getItem('eclList'));
            tableData.innerHTML = '';
            for (let i = 0; i < allList.length; i++) {
                const { id, name, phone, work } = allList[i];
                tableData.innerHTML += `<tr>
                                            <td>${name}</td>
                                            <td>${phone}</td>
                                            <td>${work}</td>
                                            <td onclick='deleteListData(${id})'>X</td>
                                        </tr>`;
                
            }
        }
        
        const deleteListData = (id) =>{
            let allList = JSON.parse(localStorage.getItem('eclList'));            
            const listFilter1 = allList.filter((list)=> list.id == id);
            const deleteAgree = confirm(`Are You Sure to Delete ${listFilter1[0].name} ?`);
            if(deleteAgree){
                const listFilter = allList.filter((list)=> list.id !== id);            
                localStorage.setItem("eclList",JSON.stringify(listFilter));
                alert(`You Deleted ${listFilter1[0].name} from your list`);
                fetchData();
            }

        }
        fetchData();