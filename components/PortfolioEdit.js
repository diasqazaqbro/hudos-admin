import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";

const apiUrl = "https://api.reddel.kz/api/get_portfolio_images";

export default function ProductForm({_id}) {

  useEffect(() => {
    axios.get(`/api/portfolio?id=${_id}`).then((response) => {
      setTitle(response.data.title)
      setSupTitle(response.data.supTitle)
      setDesc(response.data.desc)
      setImgId(response.data.imgId)
      setConstruction(response.data.construction)
    });
   
  }, [_id])
  
  const [title, setTitle] = useState('');
  const [supTitle, setSupTitle] = useState('');
  const [desc, setDesc] = useState('');
  const [imgId, setImgId] = useState('');
  const [construction, setConstruction] = useState( "architecture");
  const [imageOne, setImageOne] = useState('');
  const [imageTwo, setImageTwo] = useState('');
  const [imageThree, setImageThree] = useState('');
  const [imageFour, setImageFour] = useState('');
  const [imageFive, setImageFive] = useState('');
  const [imageSix, setImageSix] = useState('');
  const [imageSeven, setImageSeven] = useState('');
  const [imageEight, setImageEight] = useState('');
  const [fileOne, setFileOne] = useState(null);
  const [fileTwo, setFileTwo] = useState(null);
  const [fileThree, setFileThree] = useState(null);
  const [fileFour, setFileFour] = useState(null);
  const [fileFive, setFileFive] = useState(null);
  const [fileSix, setFileSix] = useState(null);
  const [fileSeven, setFileSeven] = useState(null);
  const [fileEight, setFileEight] = useState(null);

  const [goToProducts, setGoToProducts] = useState(false);
  const router = useRouter();

  const handleCheckboxChange = (value) => {
    setConstruction(value === construction ? null : value);
  };
  useEffect(() => {
    axios.get(`${apiUrl}/${imgId}1`).then((response) => {
      setImageOne(`https://api.reddel.kz/${response.data.image}`);
    });
    axios.get(`${apiUrl}/${imgId}2`).then((response) => {
      setImageTwo(`https://api.reddel.kz/${response.data.image}`);
    });
    axios.get(`${apiUrl}/${imgId}3`).then((response) => {
      setImageThree(`https://api.reddel.kz/${response.data.image}`);
    });
    axios.get(`${apiUrl}/${imgId}4`).then((response) => {
      setImageFour(`https://api.reddel.kz/${response.data.image}`);
    });
    axios.get(`${apiUrl}/${imgId}5`).then((response) => {
      setImageFive(`https://api.reddel.kz/${response.data.image}`);
    });
    axios.get(`${apiUrl}/${imgId}6`).then((response) => {
      setImageSix(`https://api.reddel.kz/${response.data.image}`);
    });
    axios.get(`${apiUrl}/${imgId}7`).then((response) => {
      setImageSeven(`https://api.reddel.kz/${response.data.image}`);
    });
    axios.get(`${apiUrl}/${imgId}8`).then((response) => {
      setImageEight(`https://api.reddel.kz/${response.data.image}`);
    });
  }, [imgId])
  async function saveProduct(ev) {
    ev.preventDefault();
    const data = {
      title,
      supTitle,
      desc,
      imgId,
      construction,
    };
    await axios.put('/api/portfolio', {...data,_id});
    setGoToProducts(true);

    if (fileOne != null) {
      const formDataOne = new FormData();
      formDataOne.append("id", `${imgId}1`);
      formDataOne.append("image", fileOne);

      await axios.post(`${apiUrl}/${imgId}1`, formDataOne, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
    }

    if (fileTwo != null) {
      const formDataTwo = new FormData();
      formDataTwo.append("id", `${imgId}2`);
      formDataTwo.append("image", fileTwo);

      await axios.post(`${apiUrl}/${imgId}2`, formDataTwo, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
    }

    if (fileThree != null) {
      const formDataThree = new FormData();
      formDataThree.append("id", `${imgId}3`);
      formDataThree.append("image", fileThree);

      await axios.post(`${apiUrl}/${imgId}3`, formDataThree, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
    }

    if (fileFour != null) {
      const formDataFour = new FormData();
      formDataFour.append("id", `${imgId}4`);
      formDataFour.append("image", fileFour);

      await axios.post(`${apiUrl}/${imgId}4`, formDataFour, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
    }

    if (fileFive != null) {
      const formDataFive = new FormData();
      formDataFive.append("id", `${imgId}5`);
      formDataFive.append("image", fileFive);

      await axios.post(`${apiUrl}/${imgId}5`, formDataFive, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
    }

    if (fileSix != null) {
      const formDataSix = new FormData();
      formDataSix.append("id", `${imgId}6`);
      formDataSix.append("image", fileSix);

      await axios.post(`${apiUrl}/${imgId}6`, formDataSix, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
    }

    if (fileSeven != null) {
      const formDataSeven = new FormData();
      formDataSeven.append("id", `${imgId}7`);
      formDataSeven.append("image", fileSeven);

      await axios.post(`${apiUrl}/${imgId}7`, formDataSeven, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
    }

    if (fileEight != null) {
      const formDataEight = new FormData();
      formDataEight.append("id", `${imgId}8`);
      formDataEight.append("image", fileEight);

      await axios.post(`${apiUrl}/${imgId}8`, formDataEight, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
    }
  }

  if (goToProducts) {
    router.push("/portfolio");
  }

  return (
    <>
      <form onSubmit={saveProduct}>
        <label>Заголовок</label>
        <input
          type="text"
          placeholder="Заголовок"
          value={title}
          onChange={(ev) => setTitle(ev.target.value)}
        />
        <label>Под заголовок</label>
        <input
          type="text"
          placeholder="Под заголовок"
          value={supTitle}
          onChange={(ev) => setSupTitle(ev.target.value)}
        />
        <label>Описание</label>
        <textarea
          placeholder="Описание"
          value={desc}
          onChange={(ev) => setDesc(ev.target.value)}
        />
        <label>Тип</label>
        <div className="flex items-center space-x-4">
          <input
            type="checkbox"
            checked={construction === "architecture"}
            onChange={() => handleCheckboxChange("architecture")}
            className="form-checkbox h-5 w-5 text-green-500"
          />
          <label htmlFor="architecture" className="ml-2">
            Архитектура
          </label>
          <input
            type="checkbox"
            checked={construction === "design"}
            onChange={() => handleCheckboxChange("design")}
            className="form-checkbox h-5 w-5 text-blue-500"
          />
          <label htmlFor="design" className="ml-2">
            Дизайн
          </label>
        </div>
        <label>Главная фотка</label>
        <div
          style={{
            border: "2px solid black",
            marginTop: "20px",
            padding: "25px",
          }}
        >
          <img src={imageOne} style={{ width: '400px', height: '400px'}} />
          <input
            type="file"
            onChange={(event) => {
              setFileOne(event.target.files[0]);
            }}
          />
        </div>
        <label>Остальные фотки</label>
        <div
          style={{
            border: "2px solid black",
            marginTop: "20px",
            padding: "25px",
          }}
        >
          <img src={imageTwo} style={{ width: '400px', height: '400px'}} />
          <input
            type="file"
            onChange={(event) => {
              setFileTwo(event.target.files[0]);
            }}
          />
        </div>
        <div
          style={{
            border: "2px solid black",
            marginTop: "20px",
            padding: "25px",
          }}
        >
          <img src={imageThree} style={{ width: '400px', height: '400px'}} />
          <input
            type="file"
            onChange={(event) => {
              setFileThree(event.target.files[0]);
            }}
          />
        </div>
        <div
          style={{
            border: "2px solid black",
            marginTop: "20px",
            padding: "25px",
          }}
        >
          <img src={imageFour} style={{ width: '400px', height: '400px'}} />
          <input
            type="file"
            onChange={(event) => {
              setFileFour(event.target.files[0]);
            }}
          />
        </div>
        <div
          style={{
            border: "2px solid black",
            marginTop: "20px",
            padding: "25px",
          }}
        >
          <img src={imageFive} style={{ width: '400px', height: '400px'}} />
          <input
            type="file"
            onChange={(event) => {
              setFileFive(event.target.files[0]);
            }}
          />
        </div>
        <div
          style={{
            border: "2px solid black",
            marginTop: "20px",
            padding: "25px",
          }}
        >
          <img src={imageSix} style={{ width: '400px', height: '400px'}} />
          <input
            type="file"
            onChange={(event) => {
              setFileSix(event.target.files[0]);
            }}
          />
        </div>
        <div
          style={{
            border: "2px solid black",
            marginTop: "20px",
            padding: "25px",
          }}
        >
          <img src={imageSeven} style={{ width: '400px', height: '400px'}} />
          <input
            type="file"
            onChange={(event) => {
              setFileSeven(event.target.files[0]);
            }}
          />
        </div>
        <div
          style={{
            border: "2px solid black",
            marginTop: "20px",
            padding: "25px",
          }}
        >
          <img src={imageEight} style={{ width: '400px', height: '400px'}} />
          <input
            type="file"
            onChange={(event) => {
              setFileEight(event.target.files[0]);
            }}
          />
        </div>

        <button type="submit" className="btn-primary my-2">
          Save
        </button>
      </form>
    </>
  );
}
