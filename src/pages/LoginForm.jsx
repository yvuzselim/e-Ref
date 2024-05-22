import React, { useState } from 'react';
import axios from 'axios';
import "../assets/style.css"

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://eref-api.runasp.net/api/Authentication/login', {
        email: email,
        password: password,
      }, {
        headers: {
          'accept': 'text/plain',
          'Content-Type': 'application/json'
        }
      });

      console.log('Response:', response.data);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div>
    <form onSubmit={handleSubmit}>
        {/* Form için Başlıklar */}
        <div className="headingsContainer">
            <h3>Giriş Yap</h3>
            <p>Kullanıcı adınız ve şifrenizle giriş yapın</p>
        </div>

        {/* Tüm giriş alanları için ana konteyner */}
        <div className="mainContainer">
            {/* Kullanıcı Adı */}
            <label htmlFor="email">Emailiniz: </label>
            <input 
                type="text" 
                placeholder="Email Giriniz" 
                name="email" 
                id="email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required 
            />

            <br /><br />

            {/* Şifre */}
            <label htmlFor="pswrd">Şifreniz</label>
            <input 
                type="password" 
                placeholder="Şifreyi Girin" 
                name="pswrd" 
                id="pswrd" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required 
            />

            {/* Onay kutusu ve şifremi unuttum bağlantısı için alt konteyner */}
            <div className="subcontainer">
                <label>
                    <input type="checkbox" defaultChecked name="remember" /> Beni Hatırla
                </label>
                <p className="forgotpsd"> <a href="#">Şifremi Unuttum?</a></p>
            </div>

            {/* Giriş düğmesi */}
            <button type="submit" id="submitBtn">Giriş Yap</button>

            {/* Üye ol bağlantısı */}
            <p className="register">Henüz üye değil misiniz? <a href="#">Buradan kayıt olun!</a></p>
        </div>
    </form>
</div>
  );
};

export default LoginForm;