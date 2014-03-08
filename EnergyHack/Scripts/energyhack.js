var EnergyHack = { Handlers: {}, Services: {}, Page: {}, Layout: {}, Tests: {}, MapsUtility: {}, Utilities: {}, Analytics: {} };

EnergyHack.Ajax = function (inputModel) {
    if (!inputModel.URL) {
        console.log("EnergyHack.Ajax requires a URL");
        return;
    }

    var AjaxSettings = {
        headers: {
            Accept: "application/json; charset=utf-8",
        },
        url: inputModel.URL,
        type: inputModel.Method || "GET",
        data: inputModel.Data,
        success: inputModel.Success || EnergyHack.Handlers.Success,
        error: inputModel.Error || EnergyHack.Handlers.Error,
        cache: false,
        EnergyHackModel: inputModel
    };

    if (inputModel.AjaxSettings) {
        jQuery.extend(true, AjaxSettings, inputModel.AjaxSettings);
    }

    $.ajax(AjaxSettings);
};

EnergyHack.Services.TakeUserInput = function () {
    this.URL = "/api/home/userinputsubmit";
    this.Method = 'PUT';
    this.Data = null;
    this.Success = function () {
        //successfunction
    };
    this.Error = function () {
        //errorfunction
    };
}