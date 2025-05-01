document.addEventListener('DOMContentLoaded', function () { 


    document
    .getElementById("accountList")
    .addEventListener("click", changeAccount);

    document
    .getElementById("userAddress")
    .addEventListener("click", copyAddress);

    document
    .getElementById("transferFund")
    .addEventListener("click", handler);

    document
    .getElementById("header_network")
    .addEventListener("click", getOpenNetwork);

    document
    .getElementById("network_item")
    .addEventListener("click", getSelectedNetwork);

    document
    .getElementById("add_network")
    .addEventListener("click", setNetwork);

    document
    .getElementById("loginAccount")
    .addEventListener("click", loginUser);


    document
    .getElementById("accountCreate")
    .addEventListener("click", createUser);

    document
    .getElementById("openCreate")
    .addEventListener("click",openCreate);

    document
    .getElementById("sign_up")
    .addEventListener("click", signUp);

    document
    .getElementById("login_up")
    .addEventListener("click", login);


    document
    .getElementById("logout")
    .addEventListener("click",logout);

    document
    .getElementById("goBack")
    .addEventListener("click", goBack);

    document
    .getElementById("open_Import")
    .addEventListener("click", openImport);





    document
    .getElementById("open_assets")
    .addEventListener("click", openAssets);


    document
    .getElementById("open_activity")
    .addEventListener("click",openActivity);

    document
    .getElementById("goHomePage")
    .addEventListener("click", goHomePage);

    document
    .getElementById("openAccountImport")
    .addEventListener("click", openImportModel);




    document
    .getElementById("close_import_account")
    .addEventListener("click", closeImportModel);


    document
    .getElementById("add_new_token")
    .addEventListener("click",addToken);

    document
    .getElementById("add_New_Account")
    .addEventListener("click", addAccount);

 





});

//state variables
let providerURL= 
"https://polygon-amoy.g.alchemy.com/v2/9dQrVDCWr58zM7ZACdYtQK4ihpPPM7w6";

let provider;
let privateKey;
let address;

//function


function handler(){
 document.getElementById("transfer_center").style.display="flex";

 const amount = document.getElementById("amount").value;
 const address = document.getElementById("address").value;
 
 const private_key ="a191dd697df3c2db4a0a28d8b1e1f7c300c9cf7f03b13d48a9970858b9cf26c2";
const testAccount ="0xB24fd980ea4E2372948c3c4783C1B203FDf08188";


//provider
const provider = new ethers.providers.JsonRpcProvider(providerURL);


let wallet = new ethers.Wallet(privateKey, provider);

const tx = {
    to: address,
    value: ethers.utils.parseEther(amount),
};

let a = document.getElementById("link");
a.href = "somelink url";

wallet.sendTransaction(tx).then((txObj) => {

    console.log("txHash: ", txObj.hash);

document.getElementById("transfer_center").style.display="none";

const a = document.getElementById("link");

document.getElementById("link").style.display="block";


});


}

function checkBalance(){

const provider = new ethers.providers.JsonRpcProvider(providerURL);

provider.getBalance(address).then((balance) => {

    const balanceInEth = ethers.utils.formatEther(balance);

    document.getElementById("accountBalance").innerHTML = '${balanceInEth} MATIC';
    document.getElementById("userAddress").innerHTML = '${address.slice(0, 15)}...';


});
}

function getOpenNetwork(){

document.getElementById("network").style.display="block";



};

function getSelectedNetwork(){

const element = document.getElementById("selected_network");

element.innerHTML = e.target.innerHTML;

if(e.target.innerHTML === "Ethereum Mainnet"){

    providerURL = "https://eth-mainnet.g.alchemy.com/v2/9dQrVDCWr58zM7ZACdYtQK4ihpPPM7w6";
    document.getElementById("network").style.display="none";

} else if (e.target.innerHTML === "Polygon Mainnet"){

    providerURL = "https://polygon-mainnet.g.alchemy.com/v2/9dQrVDCWr58zM7ZACdYtQK4ihpPPM7w6";
    document.getElementById("network").style.display="none";
}
else if (e.target.innerHTML === "Polygon Amoy"){

    providerURL = "https://polygon-amoy.g.alchemy.com/v2/9dQrVDCWr58zM7ZACdYtQK4ihpPPM7w6";
    document.getElementById("network").style.display="none";
} else if (e.target.innerHTML === "Ethereum Sepolia"){   

    providerURL = "https://rpc.ankr.com/eth_sepolia/b28dbf59debf22e46e35a71ae2f8a6fec4e726fcafa32c5c6f5f95e9f22fae29";
    document.getElementById("network").style.display="none";
}
console.log(providerURL);
}
function setNetwork(){


document.getElementById("network").style.display="none";

};

function loginUser(){

document.getElementById("createAccount").style.display = "none";
document.getElementById("LoginUser").style.display = "block";



};

function createUser(){
    document.getElementById("createAccount").style.display = "block";
    document.getElementById("LoginUser").style.display = "none";
    



};

function openCreate(){
    document.getElementById("createAccount").style.display = "none";
    document.getElementById("create_popUP").style.display = "block";


};

function signUp(){
const name = document.getElementById("sign_up_name").value;
const email = document.getElementById("sign_up_email").value;
const password = document.getElementById("sign_up_password").value;
const passwordConfirm = document.getElementById("sign_up_passwordConfirm").value;

document.getElementById("field").style.display = "none";
document.getElementById("center").style.display = "block";

const wallet = ethers.Wallet.createRandom();

if(wallet.address){
    console.log(wallet);


    //API call
    const url = "http://localhost:3000/api/v1/user/signup";

const data = {
    name: name,
    email: email,
    password: password,
    passwordConfirm: passwordConfirm,
    address: wallet.address,
    private_key: wallet.privateKey,
    mnemonic: wallet.mnemonic.phrase,


};
fetch(url, {
    method: "POST",
    handlers: {
        "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
}).then((response) => response.json()).then((result)=>{

document.getElementById("createdAddress").innerHTML = wallet.address;
document.getElementById("createdPrivateKey").innerHTML = wallet.privateKey;
document.getElementById("createdMnemonic").innerHTML = wallet.mnemonic.phrase;
document.getElementById("center").style.display = "none";
document.getElementById("accountData").style.display = "block";
document.getElementById("sign_up").tyle.display = "none";


const userWallet = {
    address: wallet.address,
    privateKey: wallet.privateKey,
    mnemonic: wallet.mnemonic.phrase,
};

const JsonObj = JSON.stringify(userWallet);
localStorage.setItem("userWallet", JsonObj);
document.getElementById("goHomePage").style.display = "block";
window.location.reload();



}).catch((error) => {
    console.log("Error:", error);
    ;
});
}
}
function login(){





    
};

function logout(){};

function openTransfer(){};

function openImport(){};

function importGoBack(){};

function openActivity(){};

function openAssets(){};

function goHomePage(){};

function goBack(){};

function openCreateModel(){};

function openImportModel(){};

function closeImportModel(){};

function addToken(){};

function addAccount(){};

function myFunction(){};


function copyAddress(){};

function changeAccount(){};


























