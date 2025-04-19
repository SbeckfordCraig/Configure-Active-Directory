 <p align="center">
<img src="https://i.imgur.com/pU5A58S.png" alt="Microsoft Active Directory Logo"/>
</p>

<h1>Configure Active Directory Deployed in the Cloud (Azure)</h1>
This tutorial outlines setting up and configureing Active Directory within Azure Virtual Machines.<br />

<h2>Environments and Technologies Used</h2>

- Microsoft Azure (Virtual Machines)
- Remote Desktop
- Active Directory Domain Services
- PowerShell

<h2>Operating Systems Images used for Virtual Machines</h2>

- Windows Server 2022
- Windows 10 (21H2)

<h2>Deployment and Configuration Steps Overview</h2>

- Creating a Resource Group with Server and Client
- Configuring TCP Proctols in Windows Firewall
- Installing Active Directory and User Groups
- Connecting Virtual Machine to Cloud Server and Adding Users

<br />
<h3 
<br />

  <h1>1. Setting up the Domain Controller</h1>
  
To start things off we are first going to create a new Resource Group to have a place to store our VMs (virtual machines

![image](https://github.com/user-attachments/assets/da812a42-04a8-4668-8345-bd34db8847c1)

  
NOTE: If you do not see Resource Groups on the Azure dashboard type in Resource Group in the search bar at the top<p/>

Next we are going to create our own Virtual Network. 
Ususally the VN (virtual network) is created automatically you create the VM (virtaul machine).
In this Instance wwe are going to create a Vitrual network on our own
  First in the search bar on the top of the screen type in Virtual Networks, once you click on the name you should be direct to a screen that looks like this (see below)

<p />
  
  ![image](https://github.com/user-attachments/assets/c487f925-52e4-46a6-a6c0-84030e83549c)

Click Create virtual network. 

Then on the next screen since we made a Resource Group Ahead of time the resource group and the region should automaticcally be set up. You should always make sure all the details are the same or they will not work and will have to start over.

![image](https://github.com/user-attachments/assets/5fe90d2f-e044-4684-bd7a-4c5472112749)

once the info is correct click on Review+Create then, Azure wwill runn through a validation process and then after it is finish you click Create.
Wait a few secconds so Azure ccan run through through the deployment procccess
once everything is commplete you should see a green ccheck and "Your deploymment is commplete" whicch means everything for your Vnet is correct and is up and running (see below)
![image](https://github.com/user-attachments/assets/48715eb4-de93-4316-bc33-a4bc15f8d823)


Next we will make the Domain Controller
We are going to be creating a new virtual Maccchine to act as the Domain Controller
easiest wway to find virtual machine is to type the searcch bar then cclick virtual macchines under Services.

![image](https://github.com/user-attachments/assets/0b0a8624-bbec-496a-bf22-dad543ef1473)

CClick Create, then cclick Azure vrtual Machine


![image](https://github.com/user-attachments/assets/b60cf4b2-70cb-451f-99c8-7d2d9e4fdd5e)

Since wwe are making a Domain Controller Make sure wwhen you cchoose Image type make sure you choose WWindow Server 2022 not just Windows 10 or Windows 11

![image](https://github.com/user-attachments/assets/953d7c99-db4a-4102-aed3-177bad1e32fa)

Next for the size, for this example 2vcpus is fine you ccan alwways give it more. Just know the cost do change

![image](https://github.com/user-attachments/assets/971fc38a-4381-4dd2-b36f-2d80e0d6c763)

Next Set up the username and password for the acount or wwhoever will be having accccess to the Domain controller.

![image](https://github.com/user-attachments/assets/f3bb7e0b-9a14-4dc1-886b-cc85667f0282)

Make sure you checck both boxes under Licencsing 

![image](https://github.com/user-attachments/assets/375446be-81a6-4635-a83c-24c73e13b861)

Click Next for Disk
Click Next for Networking

Once you are on netwworking click the down arroww where it says Virtual Network and CChoose the Netwwork that we already ccreated and leave evrything else the way it is then click Review + ccreate

![image](https://github.com/user-attachments/assets/4e94c2ff-3a5c-42e2-a822-4ae23540b627)

Once validation has passed meaning you did everything ccorrecct clicck Create

![image](https://github.com/user-attachments/assets/22d4042d-f1da-4bbf-9db8-26598d25361e)


Oncce the deployment process is finish Congradutions you just created the Domain controller

Next wwe are goin to create a CClient Virtual Machine

wwhen Creating the Client Virtual Machine is pretty mucch the same process as cccreating the Domain controller VM the differencce is under the image ccategory cchoose wwindowwws 10 or 11 wwwhicch ever you deccide
also we will name this Virtual Macchine CLient-01

![image](https://github.com/user-attachments/assets/c17fccda-d828-45dc-991c-3447f3cb6627)

make sure you set up a username and passoword

![image](https://github.com/user-attachments/assets/99bdb7e2-0c14-4e2d-a25f-21e206b24d1b)


Same as before clicck Next:Disk
Click Next:Netwworking
under the networking tab make sure change Virtual Netwwwork virtual netwwwork thhat wwwe ccreaated

![image](https://github.com/user-attachments/assets/b321a83d-c686-4715-8227-ed39628e68b6)

Leave everytelse as is and CClick Review + Create and for wwfor thhhe reviewww and validation proccess
oncce theh validation passed cclicck ccreate and wwwait for the deployment procces to give you the green check and say deployment is completed
Noww wwwe are going to go bacckto thhe VM thhat is hyour DOmian ccler and cconfigure some extras 
From wwwhhereever your at cclicck thhhe wwwork hhome ususally found on thhe top left

cclicck on your domain controller virrtual Under tresourses

![image](https://github.com/user-attachments/assets/1dda3a80-bb76-4571-9126-2a60d61f7586)

![image](https://github.com/user-attachments/assets/cccd27a6-1ff2-41ac-b2e8-8d20e7eed8f3)

![image](https://github.com/user-attachments/assets/273c9d0b-2589-4adc-ae54-e2aa39fdf9b5)

![image](https://github.com/user-attachments/assets/1fd2ce28-342d-49ad-829d-700abc89141f)

![image](https://github.com/user-attachments/assets/59aac0de-6cf0-490e-a7d6-413684feebc7)


Oncce you ccchange ip settings from dynamic to static make sure you click save

now for just this demonstration and practice we are going to turn off the firewall in the Domain Controller

First we need to find the public IP address for the domain Controller. Click on the Domain controller Virtual machine which should lead you to. your VM informaion page. there you should be able to find the public IP address for you Domain Controller. you can hover the up address and it should give you an option to copy it or you can highlight to ip address and copy.


![image](https://github.com/user-attachments/assets/8797685e-2606-4db0-a883-8bb64f737aa2)

Next go to your remote desktop and enter in the public ip address for the domain controller

![image](https://github.com/user-attachments/assets/adf9e008-3ebb-41f8-adb7-0a6d4058c1dc)

Next enter in the username and past word you create for the Domain Controller

once you have logged in you should be lead to the Service Manager Dashboard 

![image](https://github.com/user-attachments/assets/0e355655-8c3f-4673-82fc-ea8d448a8c96)

NOTE: if you didn't everything correct the Service Manager Dashboard is what is supposed to show if not yo used the wrong Image and will have to start over and delete you Domain Controller and create a new Virtual Machine

Right Click on the start menu and click run

![image](https://github.com/user-attachments/assets/776ee3a1-8211-463e-834d-733f4c88ed7c)



type wf.msc and this command will lead you to the firewall

![image](https://github.com/user-attachments/assets/3821dd24-28a2-410c-b005-d90094d0e615)

click where it says windows defender firewall properties

![image](https://github.com/user-attachments/assets/07609f73-e981-4e2e-bfc6-efd5ac6bf9cc)

now under domain profile, public profile, and private profile turn each of those firewalls off once you have them off click apply and OK.

PLEASE REMEMBER YOU WILL NEVER TURN FIREWALL OFF FOR ANY REASON WHEN YOU WORKING FOR A COMPANY

Next we are going to to make some changes so that Client-01 can communicate with DC-01

so make this happen we first need to find the DC-01 private up address

![image](https://github.com/user-attachments/assets/2cc8fb41-1955-40ae-b8bf-4dcef235c3bd)
 copy the private up address of the DC-01

 then go to Client-01 VM
 
 ![image](https://github.com/user-attachments/assets/6b20a8f7-2853-4a89-b434-957804f8c42d)

 On the side bar click Networking and then click Network settings

 ![image](https://github.com/user-attachments/assets/090e052c-7345-4663-899f-6f747551c204)

click on you NIC
then on the left hand side click DNS Servers

![image](https://github.com/user-attachments/assets/d111eb74-d325-41bc-b2a5-23cd0fdd3b64)

make sure you click custom the paste the private up address of the domain controller
after that is finished click save. Now we are going to test and make sure that 'Client-01' is communicating with 'DC-01'

First we need to remotely connect to Client-01' using the public ip address 

![image](https://github.com/user-attachments/assets/b4d23af0-2cae-41e5-bcfe-1164bf42f325)

then log in using the username and password you created for the Client-01 VM
![image](https://github.com/user-attachments/assets/d294da7a-01b2-4964-9d84-5778ec6f27be)


just for the lesson just click all your choices to no when a blue screen for a setup is showed 

Once you are at the home screen in the search bar below type in powershell and then click Windows Powershell
type in ping plus then the private IP address of DC-01 if you have done everything correctly powersheel should show that packets that were send have been recived
(see Below)

![image](https://github.com/user-attachments/assets/af6e7804-e92a-4e56-9d71-8263a4c80dc2)

using the command ipconfig /all you can also fing the DNS which should be set up as DC-01
 private ip address

 ![image](https://github.com/user-attachments/assets/e0bd8e85-44a7-46a8-b193-83bdccb03c57)


</p>

<h1>
Connecting to the DNS and creating Users 
</ h1>
<p>
 First you have to Remote Desktop into DC-01
 once you are logged into DC-01 
</p>

---

By following these steps, you can deploy and configure Active Directory within Azure Virtual Machines, ensuring seamless communication and user management across your network.
