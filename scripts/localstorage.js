const saveToLocalStorage = (task) => {
    let tasks = getLocalStorage();

    if (!tasks.includes(task)) {
        tasks.push(task);
    }

    localStorage.setItem("Tasks", JSON.stringify(tasks));

}

const getLocalStorage = () => {
    let localStorageData = localStorage.getItem("Tasks");

    if(localStorageData == null){
        return [];
    }

    return JSON.parse(localStorageData);

}

export {saveToLocalStorage, getLocalStorage};
