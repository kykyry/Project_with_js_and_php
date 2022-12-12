function objectCompare(data, data2, result) {

    let background = document.querySelector(".objects");

    try {
        let obj1 = data
        let obj2 = data2

        if (typeof (obj1) === "string" && typeof (obj2) === "string") {
            obj1 = JSON.parse(obj1);
            obj2 = JSON.parse(obj2);
        }

        let arrKey1 = Object.keys(obj1);
        let arrKey2 = Object.keys(obj2);

        if (!result) {
            console.log('finish false');
            background.style.background = "red";
            return result
        }

        console.log(obj1, obj2, obj1.b, typeof (obj1), arrKey1.length, arrKey2.length)

        if (arrKey1.length == arrKey2.length) {
            arrKey1.forEach(element => {
                console.log(element)

                let val1 = obj1[element];
                let val2 = obj2[element];
                if (!result) {
                    background.style.background = "red";
                    return result
                }

                if (typeof (val1) === 'object' && typeof (val2) === 'object') {
                    console.log('ops');
                    result = objectCompare(val1, val2, result);
                    console.log('finish ops', result)
                } else {
                    if (val1 != val2) {
                        console.log(val1, val2, "not equal");
                        result = false
                        background.style.background = "red";
                    } else {
                        console.log(val1, val2, "ok")
                    }
                }
            });
            console.log(result);
            return result
        } else {
            background.style.background = "red";
            return false;
        }

    } catch (error) {
        console.log(error)
        // return ('Error')
    }

}

let el = document.querySelector(".object__button");
const objStr1 = document.querySelector("#obj1").oninput;
const objStr2 = document.querySelector("#obj2").oninput;

el.addEventListener("click", () => {objectCompare(objStr1, objStr2, true)}, false);