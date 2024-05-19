let id = 1;//initializing id counter


function createUserProfiles(names, modifiedNames) {
    return names.map(function(name, i) {
        return {
            originalName: name,
            modifiedName: modifiedNames[i],
            id: id++
        };
    });
}