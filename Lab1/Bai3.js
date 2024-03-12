import React, { useState } from 'react';
import { View, TextInput, Text } from 'react-native';

const WrapInput = ({ title, error, onChangeText, onFocus }) => {
  return (
    <View style={{ marginBottom: 20 }}>
      <Text style={{ marginBottom: 5, color:'#709BBD', fontSize:20 }}>{title}</Text>
      <TextInput 
        style={{ borderWidth: 2, borderColor: '#709BBD', borderRadius:10, paddingVertical: 5 }}
        placeholder={`Nhập ${title}`} 
        onChangeText={onChangeText}
        onFocus={onFocus}
      />
      {error && <Text style={{ color: 'red', marginTop: 5 }}>{error}</Text>}
    </View>
  );
};

const Bai3 = () => {
  const [hoTen, setHoTen] = useState('');
  const [maSinhVien, setMaSinhVien] = useState('');
  const [chuyenNganh, setChuyenNganh] = useState('');
  const [namSinh, setNamSinh] = useState('');

  const [hoTenError, setHoTenError] = useState('');
  const [maSinhVienError, setMaSinhVienError] = useState('');
  const [chuyenNganhError, setChuyenNganhError] = useState('');
  const [namSinhError, setNamSinhError] = useState('');

  const handleHoTenChange = (text) => {
    setHoTen(text);
    if (!text.trim()) {
      setHoTenError('Không được bỏ trống họ tên');
    } else {
      setHoTenError('');
    }
  };

  const handleMaSinhVienChange = (text) => {
    setMaSinhVien(text);
    if (!text.trim()) {
      setMaSinhVienError('Không được bỏ trống mã sinh viên');
    } else {
      setMaSinhVienError('');
    }
  };

  const handleChuyenNganhChange = (text) => {
    setChuyenNganh(text);
    if (!text.trim()) {
      setChuyenNganhError('Không được bỏ trống chuyên ngành');
    } else {
      setChuyenNganhError('');
    }
  };

  const handleNamSinhChange = (text) => {
    setNamSinh(text);
    const isNumeric = /^[0-9]+$/.test(text);
    if (!text.trim()) {
      setNamSinhError('Không được bỏ trống năm sinh');
    } else if (!isNumeric) {
      setNamSinhError('Năm sinh phải là số');
    } else {
      setNamSinhError('');
    }
  };

  const handleInputFocus = ( input,errorSetter, setError) => {
    if (!errorSetter.trim()) {
      setError(`Không được bỏ trống ${input}`);
    }
  };

  return (
    <View style={{ padding: 20 ,marginTop:100}}>
      <Text style={{color:'blue'}}>Thông Tin Sinh Viên</Text>
      <WrapInput
        title="Họ Tên:"
        error={hoTenError}
        onChangeText={handleHoTenChange}
        onFocus={() => handleInputFocus('họ tên',hoTenError, setHoTenError)}
      />
      <WrapInput
        title="Mã Sinh Viên:"
        error={maSinhVienError}
        onChangeText={handleMaSinhVienChange}
        onFocus={() => handleInputFocus('mã sinh viên',maSinhVienError, setMaSinhVienError)}
      />
       <WrapInput
        title="Chuyên Ngành:"
        error={chuyenNganhError}
        onChangeText={handleChuyenNganhChange}
        onFocus={() => handleInputFocus('chuyên ngành', chuyenNganhError, setChuyenNganhError)}
      />
       <WrapInput
        title="Năm Sinh:"
        error={namSinhError}
        onChangeText={handleNamSinhChange}
        onFocus={() => handleInputFocus('năm sinh',namSinhError, setNamSinhError)}
      />
{(hoTen.trim() && maSinhVien.trim() && chuyenNganh.trim() && namSinh.trim()) ? (
  <Text style={{ color: 'green', marginBottom: 20 }}>Rất Đầy Đủ Thông Tin Rồi!</Text>
) : null}


    </View>
  );
};

export default Bai3;
