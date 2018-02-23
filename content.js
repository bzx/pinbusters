function removePins(node) {

    // Find all divs with images, define others
    var link,
        href,
        img,
        match,
        host;

    // Get the URL of the image from the href attribute of <a>
    setTimeout(function() {
        link = node.querySelector('.rg_l');
        href = unescape(link.getAttribute('href'));
        
        // Check if it matches Pinterest's url
        match = href.match(/https?\:\/\/(.+.pinimg\.com\/)/i);
        host  = match && match[1];  // Host will be null if no match is found
        
        // Remove
        if (host !== null) {
            // Remove the image node
            img  = link.querySelector('.rg_i');
            link.removeChild(img);

            link.setAttribute("style", "opacity: .666; background-color: black; background-size: 75%; background-position: center center; background-repeat: no-repeat; background-image: url('data:image/png;base64,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');");
        }
    }, 1000);
}

// Observe DOM for changes
// Define the mutation observer
var observer = new MutationObserver(function (mutations) {
    for (var i = 0; i < mutations.length; i++) {
        var mutation = mutations[i];

        if (mutation.addedNodes && mutation.addedNodes.length > 0) {
            for (var j = 0; j < mutation.addedNodes.length; j++) {
                var newNode = mutation.addedNodes[j];

                if (newNode.nodeType === Node.ELEMENT_NODE) {
                    if (newNode.classList.contains('rg_bx')) {
                        removePins(newNode);
                    }
                }
            }
        }
    }
});


var objects = document.querySelectorAll('.rg_bx');
for (var i = 0; i < objects.length; i++) {
    removePins(objects[i]);
}

observer.observe(document.body, {
    childList: true,
    subtree: true
});

// Get rid of those pins
// removePins(document.body);