<p align="center">
<img src="https://i.imgur.com/pU5A58S.png" alt="Microsoft Active Directory Logo"/>
</p>

<h1>Configure Active Directory Deployed in the Cloud (Azure)</h1>
This tutorial outlines setting up and configureing Active Directory within Azure Virtual Machines.<br />

<h2>Environments and Technologies</h2>

- Microsoft Azure (Virtual Machines)
- Remote Desktop
- Active Directory Domain Services
- PowerShell

<h2>Operating Systems</h2>

- Windows Server 2022
- Windows 10 (21H2)

<h2>Deployment and Configuration Steps</h2>

- Creating a Resource Group with Server and Client
- Configuring TCP Proctols in Windows Firewall
- Installing Active Directory and User Groups
- Connecting Virtual Machine to Cloud Server and Adding Users
<br />
<h3 
<br />
<p>

### 1. Create the Domain Controller VM  
- **Virtual Machine Name**: `DC-1`  
- **Operating System**: Windows Server 2022  
- **Network**: Create a new Resource Group and Virtual Network (VNet).  
- **Configuration**: Use Azure's default settings for the VM size (e.g., 2 VCPUs).  
