import { FiShoppingCart } from "react-icons/fi";
import { AiOutlineSearch } from "react-icons/ai";

const NavbarComponent = () => {
  return (
    <div className="fixed w-full bg-orange-600 px-16 text-[14px] top-0 z-50 ">
      <div className="navbar/top flex justify-between py-2">
        <ul className="flex flex-row text-white gap-4">
          <li>Seller Centre</li>
          <li>เริ่มต้นขายสินค้า</li>
          <li>ดาวน์โหลด</li>
          <li>ติดตามเราบน</li>
        </ul>
        <ul className="navbar/top/left flex gap-4 text-white">
          <li>การแจ้งเตือน</li>
          <li>ช่วยเหลือ</li>
          <li>ไทย</li>
          <li>สมัครใหม่</li>
          <li>เข้าสู่ระบบ</li>
        </ul>
      </div>
      <div className="navbar/body flex items-center justify-between py-4 gap-11">
        <div className="logo">
          <img src="/images/logo2.jpg" className="w-[180px] h-[50px]" alt="" />
        </div>
        <div className="searchbar relative w-full">
          <div className="searchbar-wrapper w-full bg-white relative p-2">
            <input
              type="text"
              className="focus:border-none px-4 py-1 w-full h-[40px]"
              placeholder="ลูกค้าใหม่ รับเลย โค้ดส่วนลด หรือโค้ดส่งฟรี"
            />
            <button className="bg-orange-600 top-2 absolute h-[40px] w-[50px] right-2 ">
              <AiOutlineSearch className="text-white text-center m-auto text-3xl bg-orange-600" />
            </button>
          </div>
          <div className="flex gap-4 text-[13px] text-white pt-1">
            <p>เก้าอี้1บาทสำหรับลูกค้าใหม่</p>
            <p>Labubu</p>
            <p>โทรศัพท์oppoรุ่นใหม่ล่าสุด</p>
            <p>หูฟัง1บาทลูกค้าใหม่</p>
            <p>เสื้อ</p>
            <p>แก้วเก็บความเย็น1บาท</p>
            <p>score รองเท้า</p>
            <p>ลิ้นชักใส่เสื้อผ้ามินิมอล</p>
          </div>
        </div>
        <div className="cart">
          <FiShoppingCart className="w-[30px] h-[30px] text-white" />
        </div>
      </div>
    </div>
  );
};

export default NavbarComponent;
