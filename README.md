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

SInce wwe are making a Domain Controller Make sure wwhen you cchoose Image type make sur you choose WWindow Server 2022 not just Windows 10 or WWindowws 11

![image](https://github.com/user-attachments/assets/953d7c99-db4a-4102-aed3-177bad1e32fa)

Next for the size, for this example 2vcpus is fine you ccan alwways do more.
![image](https://github.com/user-attachments/assets/971fc38a-4381-4dd2-b36f-2d80e0d6c763)

Next Set up the username and password for the acount or wwhoever will be having accccess to the Domain controller.

![image](https://github.com/user-attachments/assets/f3bb7e0b-9a14-4dc1-886b-cc85667f0282)

Make sure you checck both boxes under Licencsing 

![image](https://github.com/user-attachments/assets/375446be-81a6-4635-a83c-24c73e13b861)







- **Virtual Machine Name**: `DC-01`  
- **Operating System**: Windows Server 2022  
- **Network**: Create a new Resource Group and Virtual Network (VNet).  
- **Configuration**: Use Azure's default settings for the VM size (e.g., 2 VCPUs).


---

### 2. Create the Client VM  
- **Virtual Machine Name**: `Client-01`  
- **Operating System**: Windows 10  
- **Network**: Use the **same Resource Group and VNet** created in the previous step.

---

### 3. Configure Static Private IP for the Domain Controller  
- Navigate to the **Networking tab** of the Domain Controller VM in Azure.  
- Set the **Network Interface Card (NIC)** private IP address to **Static** to ensure consistent connectivity.  

By following these steps, you will have a functioning Domain Controller (`DC-1`) and Client VM (`Client-1`) ready for further Active Directory configuration in a controlled Azure environment.


</p>
<p>
# Deploying Active Directory in Azure Virtual Machines  

This guide outlines the steps to deploy a Domain Controller (Windows Server 2022) and a Client (Windows 10) within Microsoft Azure, configure their network settings, and set up Active Directory.

---

## Deployment Overview  

### Virtual Machines Setup  
- **Domain Controller (DC-01):**  
  - Operating System: Windows Server 2022  
  - Configuration: 2 VCPUs  
  - Network: Assign a static IP in network settings.  

- **Client (Client-01):**  
  - Operating System: Windows 10  
  - Network: Use the same resource group and VNet as DC-01.  

---

## Configuration Steps  

### 1. Configure Windows Firewall for ICMP Protocols  
- Log into DC-01 via **Remote Desktop**.  
- Open **Windows Defender Firewall with Advanced Security**.  
- Enable **ICMPv4 TCP Protocols** by modifying the "Protocols" section.

---

### 2. Install and Configure Active Directory  
- Install Active Directory Domain Services on DC-1.  
- Create a new forest and domain.  
- Restart the machine (automatically triggered by the installation).  

  
![Add Forest](https://imgur.com/39rEkhJ.png)  

- Log back into DC-1 using the new domain and username.  
- Set up **Organizational Units (OUs)** and create users.  

---

### 3. Assign Administrator Properties to a User  
- Select a user in Active Directory.  
- Right-click → Properties → Member tab.  
- Add the user to the **Domain Admins** group by typing "domain admins" and clicking **Check Names**.  

  
![Add User Role](https://imgur.com/kzGVLjr.png)  

---

### 4. Update DNS Settings for Client-1  
- Change the DNS settings of Client-1 to the **private IP address of DC-1** in Azure.  
- Verify connectivity between Client-1 and DC-1.  
- Confirm that Client-1 is listed in the "Computers" container of Active Directory.  

 
![Change DNS Settings](https://imgur.com/G8LMrqB.png)  
![Verify Connectivity](https://imgur.com/lQCfRDf.png)  

---

### 5. Enable Domain Users for Remote Desktop Access  
- Log into Client-1 with the admin user.  
- Allow **Domain Users** access to remote desktop via **System Properties**.  

 
![Allow Users Access](https://imgur.com/TmSDbUU.png)  

---

### 6. Create Random Users in Active Directory  
- Use **PowerShell as Administrator** to run a script generating random users in the OU.  
- Alternatively, manually create users.  

 
![Generate Users](https://imgur.com/H9Y3SMB.png)  

---

### 7. Test User Login  
- Select a random user from the OU.  
- Log into Client-1 using the user credentials.  

 
![Login Test](https://i.imgur.com/aQ1W5gf.jpeg)  

---

By following these steps, you can deploy and configure Active Directory within Azure Virtual Machines, ensuring seamless communication and user management across your network.
