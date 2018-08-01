/**
 * @component constants
 * @description Http 服务
 * @time 2018/05/09
 * @author cool.li
 */
export default class FetchHttp {
    contentType: string;
    credentials: string;
    mode: string;
    constructor() {
        this.contentType = "application/json;charset=UTF-8";
        this.credentials = "include";
        this.mode = "cors";
    }
    handlerErr(e: any, url: any): any {
        return Promise.reject("网络异常，请稍后重试！");
    }
    async fetchData(url: string, reqtype: string, options: any) {
        // document.cookie ='SESSION=8d26f795-c573-4928-9c08-48a0dd2ab6a9;';
        const data = {
            method: reqtype,
            credentials: this.credentials as any,
            headers: {
                'Accept': 'application/json, text/plain, */*',
                "Content-Type": this.contentType,
                'X-Requested-With': 'XMLHttpRequest'
            },
            body: (reqtype === "get" ? "" : JSON.stringify(options)) || ""
        }

        try {
            const response = await fetch(url, data).catch(e => this.handlerErr(e, url));
            if (!response.ok) {
                if (response.status === 401) {
                    //登录信息过期
                    window.top.location.href = window.top.location.origin + "/web/index/view/login.jsp#login";
                } else {
                    return Promise.reject((JSON.parse(await response.text()) as any))
                }
            }
            return response;
        } catch (error) {
            console.log("catch error");
            console.log(error);
        }
    }

    get(url: string, options: any) {
        const fetchUrl = this.serializeParme(url, options);
        return this.fetchData(fetchUrl, 'get', {}).then(d => d.json()).catch(e => console.log(e));
    }

    post(url: string, options: any, otherOpts?: any) {
        return this.fetchData(url, 'post', options).then(d => d.json()).catch(e => console.log(e));
    }

    serializeParme(url: string, options: any) {
        let urlPath: string = url;
        if (options) {
            const paramsArray: any = [];
            //拼接参数  
            Object.keys(options).forEach(key => paramsArray.push(key + '=' + options[key]))
            if (url.search(/\?/) === -1) {
                urlPath += '?' + paramsArray.join('&')
            } else {
                urlPath += '&' + paramsArray.join('&')
            }
        }
        return urlPath;
    }
}
