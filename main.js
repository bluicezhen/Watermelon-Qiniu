module.exports = {
    upload (file, key, token) {
        let xhr = new XMLHttpRequest();
        // TODO: 支持使用不同的地址
        xhr.open('POST', 'http://up-z2.qiniu.com', true);
        let formData = new FormData();
        formData.append('token', token);
        formData.append('key', key);
        formData.append('file', file);

        let p = new Promise(function (resolve, reject) {
            xhr.onreadystatechange = function (response) {
                if (xhr.readyState === 4 && xhr.status === 200 && xhr.responseText !== '') {
                    let blkRet = JSON.parse(xhr.responseText);
                    resolve(blkRet, response);
                } else if (xhr.readyState === 4) {
                    reject('err', response);
                }
            };
            xhr.send(formData);
        });

        return p;
    }
};
