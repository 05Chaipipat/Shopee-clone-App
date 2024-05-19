const Homebanner = () => {
  const mockBanner = [
    {
      image:
        "https://cf.shopee.co.th/file/th-50009109-614983d5173561f9cefc6f29b7989cbe_xhdpi",
      label: "ชอปปี้เทรนด์ฮิต",
    },
    {
      image:
        "https://cf.shopee.co.th/file/th-50009109-4aa07f992f58d87251a7e51db3704a2b_xhdpi",
      label: "อิเล็กทรอนิค",
    },
    {
      image:
        "https://cf.shopee.co.th/file/th-50009109-c255b82019f4fa5b33da339d8d1f839d_xhdpi",
      label: "ลูกค้าใหม่ รับโค้ดหรือ ส่วนลดฟรี",
    },
    {
      image:
        "https://cf.shopee.co.th/file/th-50009109-e060a0047dfc3d5fb0092f2695e559fa_xhdpi",
      label: "ซูเปอร์มาเก็ต ลดสูงสุด80%",
    },
    {
      image:
        "https://cf.shopee.co.th/file/th-50009109-aeabf36909c9bb1f970de6685e73a602_xhdpi",
      label: "เก็บคอย แลกโค้ด",
    },
    {
      image:
        "https://cf.shopee.co.th/file/th-50009109-a4b1fcf8db570d28ffa6012e5b8a1423_xhdpi",
      label: "ชอปปี้โฮม โค้ดลดเพิ่ม 15%",
    },
    {
      image:
        "https://cf.shopee.co.th/file/th-50009109-3bdb7794629696a11a0cc5c609cbd0b4_xhdpi",
      label: "ชอปปี้ถูกชัว",
    },
    {
      image:
        "https://cf.shopee.co.th/file/th-50009109-dc09ce0f3eee0303db1753ec78f1a2be_xhdpi",
      label: "ส่งฟรี โค้ดลดทั้งแอป",
    },
    {
      image:
        "https://cf.shopee.co.th/file/th-50009109-a513d09c3a7f6c0e4c5e0f7cc778daf7_xhdpi",
      label: "shopee mall",
    },
  ];
  return (
    <div className="flex flex-col">
      <div className="banner flex flex-row px-5 w-full h-[240px] mt-[148.5px] gap-x-1.5 pt-[30px] ">
        <div className="banner/left w-2/3 h-full  ">
          <a href="/">
            <img
              className="w-full h-full object-cover"
              src="https://cf.shopee.co.th/file/th-50009109-d4f4ef890da59acfdb07fdd0e49226c4_xxhdpi"
              alt="product img"
            />
          </a>
        </div>
        <div className="banner/right w-1/3 h-full  flex flex-col gap-y-1.5">
          <div className="banner/rigth/top h-1/2 bg-blue-700 w-full">
            <a href="/">
              <img
                className="w-full h-full object-cover"
                src="https://cf.shopee.co.th/file/th-50009109-16a813810f0a1e2a72169e5806687cbf_xhdpi"
                alt="product img"
              />
            </a>
          </div>
          <div className="banner/right/bottom h-1/2 bg-blue-300 w-full">
            <a href="/">
              <img
                className="w-full h-full object-cover"
                src="https://cf.shopee.co.th/file/th-50009109-bbbb622aee7b244f47c76321b6e8c3f3_xhdpi"
                alt="product img"
              />
            </a>
          </div>
        </div>
      </div>
      <div className="banner/icon flex items-start justify-around px-5 py-5 mt-2.5  ">
        {mockBanner.map((banner, index) => (
          <a key={index} href="/">
            <div className="flex flex-col justify-center items-center ">
              <div className="flex justify-center items-center p-1.5 max-w-14 ">
                <img
                  className="w-full h-full object-cover"
                  src={banner.image}
                  alt="product img"
                />
              </div>
              <p className="text-center pt-2.5 max-w-40">{banner.label}</p>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Homebanner;
