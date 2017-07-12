module.exports = {
    upload (file, key, token, upload_url='//up-z2.qbox.me') {
        let xhr = new XMLHttpRequest();

        xhr.open('POST', upload_url, true);
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
