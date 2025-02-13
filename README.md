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
- **Virtual Machine Name**: `DC-01`  
- **Operating System**: Windows Server 2022  
- **Network**: Create a new Resource Group and Virtual Network (VNet).  
- **Configuration**: Use Azure's default settings for the VM size (e.g., 2 VCPUs).

<h2>need placement imagees here</h2>

---

### 2. Create the Client VM  
- **Virtual Machine Name**: `Client-1`  
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
