import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-re',
  templateUrl: './re.component.html',
  styleUrls: ['./re.component.css']
})
export class ReComponent {
  title = 'regis';
  pass : string = '';
  con_pass : string= '';
  Age: string = ''; 
  Phone : string = '' ;
  email : any = '' ;
  firstname : string = '';
  lastname : string = '';
  gender : any = '';
  errorMessage: string = '';
  constructor(private router: Router) {}
    //* ปุ่มสมัคร
    adduser() {
    if (this.pass === '' || this.con_pass === '' || this.Age === '' || this.Phone === '' || this.email === '' || this.firstname === '' || this.lastname === '' || this.gender === '') {
        let Fields = [];//* ประกาศตัวแปรเพื่อเก็บค่า
        if (this.pass === '') {
            Fields.push('Password');
        }
        if (this.con_pass === '') {
            Fields.push('con_pass');
        }
        if (this.Age === '') {
            Fields.push('Age');
        }
        if (this.Phone === '') {
            Fields.push('Phone');
        }
        if (this.email === '') {
            Fields.push('Email');
        }
        if (this.firstname === '') {
            Fields.push('Firstname');
        }
        if (this.lastname === '') {
          Fields.push('Lastname');
      } 
        if (this.gender === '') {
            Fields.push('Gender');
        }
        this.errorMessage = 'กรุณากรอกข้อมูล: ' + Fields.join(', ');
        {
        return;
        }
        
      }
      
    //* ตรวจรหัสผ่าน
    console.log('Value Password Is: ', this.pass);
    console.log('Value Confirm Password Is: ', this.con_pass);
   
    if (this.pass === this.con_pass) {
      if (this.pass.length < 8){
        alert ('กรอกรหัสอย่างน้อย 8 หลัก');
        this.errorMessage = '';
        return;
      }
      this.errorMessage = '';
      alert('สมัครสำเร็จ')
      this.router.navigate(['/random']);
    } else {
      this.errorMessage = '';
      alert('สมัครไม่สำเร็จ รหัสผ่านไม่ตรงกัน');
      this.clearform();
    }
    }
    clearerror(field: string) {
      switch (field) {
        case 'firstname':
          this.errorMessage = this.errorMessage.replace(/Firstname,/gi, ''); // เคลียร์ข้อความผิดพลาดของช่อง 
          break;
        case 'lastname':
          this.errorMessage = this.errorMessage.replace(/Lastname,/gi, ''); 
          break;
        case 'age':
          this.errorMessage = this.errorMessage.replace(/Age,/gi, ''); 
          break;
        case 'email':
          this.errorMessage = this.errorMessage.replace(/Email,/gi, ''); 
            break;  
        case 'phone':
          this.errorMessage = this.errorMessage.replace(/Phone,/gi, ''); 
              break;
        case 'password':
          this.errorMessage = this.errorMessage.replace(/Password,/gi, ''); 
                break;      
        case 'con_pass':
          this.errorMessage = this.errorMessage.replace(/Con_Pass,/gi, ''); 
                break;  
        case 'Gender': 
        this.errorMessage = this.errorMessage.replace(/Gender,/gi, '');
      break;
        default:
          break;
          
      }
    }
    
    
    
    
    
    
  isValidEmail(): boolean {
    const emailPattern = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    return this.email && !!this.email.match(emailPattern);
  }
  
  
  //* ให้กรอกได้แค่ตัวเลข 10หลัก
  onInputChange(event: any) {
    let inputValue = event.target.value;
  
    // กรองข้อมูลให้เป็นตัวเลขเท่านั้น
    inputValue = inputValue.replace(/[^\d]/g, ''); 
  
    
    if (inputValue.length > 10) {
      inputValue = inputValue.slice(0, 10);
    }
  
    // กำหนดค่าให้กับ input field
    event.target.value = inputValue;
    
  }
  onInputChange1(event1: any) {
    let inputValue = event1.target.value;
  
    // กรองข้อมูลให้เป็นตัวเลขเท่านั้น
    inputValue = inputValue.replace(/[^\d]/g, ''); 
  
    
    if (inputValue.length > 3) {
      inputValue = inputValue.slice(0, 3);
    }
  
    // กำหนดค่าให้กับ input field
    event1.target.value = inputValue;
  }
  onInputChange2(event2: any) {
    let inputValue = event2.target.value;
  
    // กรองข้อมูลให้เป็นตัวเลขเท่านั้น
    inputValue = inputValue.replace(/[^\d]/g, ''); 
  
    
    if (inputValue.length > 3) {
      inputValue = inputValue.slice(0, 3);
    }
  
    // กำหนดค่าให้กับ input field
    event2.target.value = inputValue;
  }
  
   clearform()
   {
    this.pass='';
    this.con_pass='';
   }
//* ยกเลิก
  cancle()
  {
      this.pass = '';
      this.con_pass = '';
      this.Age = '';
      this.Phone = '';
      this.email = '';
      this.firstname = '';
      this.lastname = '';
      this.gender = '';
      this.errorMessage = '';
  }
  back() {
    
    this.router.navigate(['wel']);
  }
}

