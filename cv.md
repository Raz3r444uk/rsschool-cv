# **VLADIMIR GUSKOV**
***
## 
```
function reverse(n) {
    if (n > 0) {
        let result = String(n).split("").reverse().join("");
        return result;
    } else {
        let result = String(Math.abs(n)).split("").reverse().join("");
        return result;
    }
}

```