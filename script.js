
// heart count function 
for (let i = 1; i <= 9; i++) {
    document.getElementById('heartbtn' + i).addEventListener('click', function () {
        let heartCount = parseInt(document.getElementById('heartcount').innerText);
        let countAdd = heartCount + 1;
        document.getElementById('heartcount').innerText = countAdd;
        console.log(`Heart ${i} clicked. Total hearts: ${countAdd}`);
    });
}

// // copy function 
for (let i = 1; i <= 9; i++) {
    document.getElementById('copy' + i).addEventListener('click', function () {
        let copyCount = parseInt(document.getElementById('copycount').innerText);
        let copyAdd = copyCount + 1;
        document.getElementById('copycount').innerText = copyAdd;
    });
}


// call & alert function 
const alertMessages = {
    1: 'National Emergency Number calling 999...',
    2: 'Police Helpline Number 999...',
    3: 'Fire Service Number calling 999...',
    4: 'Ambulance Service calling 1994-999999...',
    5: 'Women & Child Helpline calling 109...',
    6: 'Anti-Corruption Helpline calling 106...',
    7: 'Electricity Helpline calling 16216...',
    8: 'Brac Helpline calling 16445...',
    9: 'Bangladesh Railway Helpline calling 163...'
};

for (let i = 1; i <= 9; i++) {
    document.getElementById('callbtn' + i).addEventListener('click', function () {
        let coinCount = parseInt(document.getElementById('coin').innerText);
        if (coinCount < 20) {
            alert('Invalid balance');
            return;
        }

        alert(alertMessages[i]);

        let coinMinus = coinCount - 20;
        document.getElementById('coin').innerText = coinMinus;

        let serviceName = document.getElementById('service' + i).innerText;
        let serviceNumber = document.getElementById('threeNine').innerText;
        let date = new Date().toLocaleTimeString();

        let item = document.createElement('div');
        item.innerHTML = `
      <div class="flex justify-between items-center p-[16px] bg-[#FAFAFA] rounded-[8px]">
        <div>
          <h4 class="hind-madurai-semibold text-[18px] font-semibold text-black">${serviceName}</h4>
          <h6>${serviceNumber}</h6>
        </div>
        <p class="text-[18px] font-normal text-black">${date}</p>
      </div>
    `;

        document.getElementById('call-history').appendChild(item);
    });
}





