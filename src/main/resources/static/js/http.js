//获取get请求的参数
function getQueryVariable(variable) {
    var query = window.location.search.substring(1);
    var vars = query.split("&");
    for (var i = 0; i < vars.length; i++) {
        var pair = vars[i].split("=");
        if (pair[0] == variable) {
            return pair[1];
        }
    }
    return false;
}
function msg(msg,type) {
    if ('success'===type)
        layer.msg(msg,{icon:1})
    else if ('error'===type)
        layer.msg(msg,{icon:5})
    else if ('wrong'===type)
        layer.msg(msg,{icon:7})
}
function reload(second) {
    if (!second){
        second = 0.1
    }
    setTimeout(function () {
        location.reload()
    },second*1000)
}
var http = {
    get: function (url, params, back) {
        $.ajax({
            type: 'GET',
            url: url,
            data: params,
            success: function (res) {
                debugger;
                back(res)
            },
            error: function (xhr, textStatus, errorThrown) {
                msg(errorThrown,'error')
            }
        })
    },
    form: function (url, data, back) {
        $.ajax({
            type: 'POST',
            url: url,
            data: data,
            success: function (res) {
                debugger;
                back(res)
            },
            error: function (xhr, textStatus, errorThrown) {
                msg(errorThrown,'error')
            }
        })
    },
    post: function (url, data, back) {
        $.ajax({
            type: 'POST',
            url: url,
            data: data,
            contentType: 'application/json',
            success: function (res) {
                debugger;
                back(res)
            },
            error: function (xhr, textStatus, errorThrown) {
                msg(errorThrown,'error')
            }
        })
    },
    put: function (url, data, back) {
        $.ajax({
            type: 'PUT',
            url: url,
            data: data,
            contentType: 'application/json',
            success: function (res) {
                debugger;
                back(res)
            },
            error: function (xhr, textStatus, errorThrown) {
                msg(errorThrown,'error')
            }
        })
    },
    delete: function (url, data, back) {
        $.ajax({
            type: 'DELETE',
            url: url,
            data: data,
            contentType: 'application/json',
            success: function (res) {
                debugger;
                back(res)
            },
            error: function (xhr, textStatus, errorThrown) {
                msg(errorThrown,'error')
            }
        })
    },
}

