// TEST AREA // 

  // function sleep(ms) {
  //   return new Promise(resolve => setTimeout(resolve, ms));
  // }
  
  // async function get_info() {
  //   await sleep(500);
  //   const entries = Array.from(document.querySelectorAll(".styles__draftPoolContent__OvOLG"));
  //   var entry_names = [];
  //   if (entries.length > 0) {
  //     for (let index = 0; index < entries.length; index++) {
  //       var temp_list = [];
  //       const entry = entries[index];
  
  //       const username = entry.querySelector(".styles__draftPoolTitle__PBQL9")
  //       if (username) {
  //         const username_text = username.textContent.trim();
  //         temp_list.push(username_text);
  //       }
  //       const player = entry.querySelector(".styles__infoValue__dbbnp");
  //       if (player) {
  //         const player_text = player.textContent.trim();
  //         temp_list.push(player_text);
  //       }
  //       const pick = entry.querySelector(".styles__infoValue__dbbnp");
  //       if (pick) {
  //         const pick_text = pick.textContent.trim();
  //         temp_list.push(pick_text);
  //       }
  
  //       entry_names.push(temp_list);
  //     }
  //     chrome.storage.sync.get(['username'], async function(data) {
  //       const targetUsername = data.username;
  //       console.log(targetUsername);
  //       return targetUsername
  //     });
  //     // const targetUsername = 'THEWOOD1105';
  //     const filtered_array = entry_names.filter(innerArray => innerArray[0] === targetUsername);
  //     // return filtered_array;
  //     return entry_names;
  // }};
  
  // function removeOverlay() {
  //   const existingOverlay = document.getElementById('customOverlay');
  //   if (existingOverlay) {
  //     existingOverlay.remove();
  //   }
  // }
  
  // document.addEventListener("click", async function (event) {
  //   const specificDiv = event.target.closest(".styles__slateRow__aPpfu");
  //   if (specificDiv) {
  //     removeOverlay();
  //     const display_array = await get_info();
  //     console.log(display_array);
  
  //     const overlayContainer = document.createElement('div');
  //     overlayContainer.style.position = 'fixed';
  //     overlayContainer.style.top = '50%';
  //     overlayContainer.style.right = '20px';
  //     overlayContainer.style.transform = 'translateY(-50%)';
  //     overlayContainer.style.background = 'black';
  //     overlayContainer.style.padding = '10px';
  //     overlayContainer.style.border = '3px solid white';
  //     overlayContainer.style.color = 'white';
  //     overlayContainer.style.height = '300px';
  //     overlayContainer.style.width = '300px';
  //     overlayContainer.style.fontFamily = 'Arial, sans-serif';
  //     overlayContainer.style.boxShadow = '0 0 10px rgba(255, 255, 255, 0.5)';
  //     overlayContainer.style.transition = 'opacity 0.3s ease-in-out';
  //     overlayContainer.style.zIndex = '9999';
  //     overlayContainer.style.overflow = 'auto';
  
  //     // Check if display_array is an array before using map
  //     if (Array.isArray(display_array)) {
  //       // Construct a string from the array elements
  //       const overlayText = display_array.map(entry => entry.join(': ')).join('\n');
  //       overlayContainer.innerText = overlayText;
  //     } else {
  //       overlayContainer.innerText = 'Error: Display array is not valid.';
  //     }
  
  //     document.body.appendChild(overlayContainer);
  //   }
  // });
  



// LIVE AREA // 

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function get_info() {
  await sleep(500);
  const entries = Array.from(document.querySelectorAll(".styles__draftingCell__pD1pn.styles__draftingCell__Q8fFL"));
  var entry_names = [];
  if (entries.length > 0) {
    for (let index = 0; index < entries.length; index++) {
      var temp_list = [];
      const entry = entries[index];

      const username = entry.querySelector(".styles__username__McRvJ")
      if (username) {
        const username_text = username.textContent.trim();
        temp_list.push(username_text);
      }
      const player = entry.querySelector(".styles__pickName__b7C37");
      if (player) {
        const player_text = player.textContent.trim();
        temp_list.push(player_text);
      }
      const pick = entry.querySelector(".styles__roundAndPick__NHB1t");
      if (pick) {
        const pick_text = pick.textContent.trim();
        temp_list.push(pick_text);
      }

      entry_names.push(temp_list);
    }
    chrome.storage.sync.get(['username'], async function(data) {
      const targetUsername = data.username;
      console.log(targetUsername);
      return targetUsername
    });
    //const targetUsername = 'THEWOOD1105';
    const filtered_array = entry_names.filter(innerArray => innerArray[0] === targetUsername);
    return filtered_array;
}};

function removeOverlay() {
  const existingOverlay = document.getElementById('customOverlay');
  if (existingOverlay) {
    existingOverlay.remove();
  }
}

document.addEventListener("click", async function (event) {
  const specificDiv = event.target.closest(".styles__activeDraftCell__ZFLtW");
  if (specificDiv) {
    removeOverlay();
    const display_array = await get_info();
    console.log(display_array);

    const overlayContainer = document.createElement('div');
    overlayContainer.style.position = 'fixed';
    overlayContainer.style.top = '50%';
    overlayContainer.style.right = '20px';
    overlayContainer.style.transform = 'translateY(-50%)';
    overlayContainer.style.background = 'black';
    overlayContainer.style.padding = '10px';
    overlayContainer.style.border = '3px solid white';
    overlayContainer.style.color = 'white';
    overlayContainer.style.height = '300px';
    overlayContainer.style.width = '300px';
    overlayContainer.style.fontFamily = 'Arial, sans-serif';
    overlayContainer.style.boxShadow = '0 0 10px rgba(0, 0, 0, 0.5)';
    overlayContainer.style.transition = 'opacity 0.3s ease-in-out';
    overlayContainer.style.zIndex = '9999';
    overlayContainer.style.overflow = 'auto';
    overlayContainer.style.fontFamily = 'Arial, sans-serif';
    overlayContainer.style.boxShadow = '0 0 10px rgba(255, 255, 255, 0.5)';
    overlayContainer.style.transition = 'opacity 0.3s ease-in-out';
    overlayContainer.style.zIndex = '9999';
    overlayContainer.style.overflow = 'auto';

    // Check if display_array is an array before using map
    if (Array.isArray(display_array)) {
      // Construct a string from the array elements
      const overlayText = display_array.map(entry => entry.join(': ')).join('\n');
      overlayContainer.innerText = overlayText;
    } else {
      overlayContainer.innerText = 'Error: Display array is not valid.';
    }

    document.body.appendChild(overlayContainer);
  }
});
