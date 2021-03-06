import * as Menu from "./RecipeWriteMenu.styles";
import { v4 as uuidv4 } from "uuid";
import { IRecipeWriteMenuUIProps } from "./RecipeWriteMenu.types";

export default function RecipeWriteMenuUI(props: IRecipeWriteMenuUIProps) {
  return (
    <Menu.Container>
      <Menu.MenuName>
        <img src="/img/recipeWrite/icon-recipeWrite-pencil.svg" alt="" />
        <input type="text" placeholder="메뉴명" {...props.register("title")} />
      </Menu.MenuName>
      <Menu.Summary>
        <img src="/img/recipeWrite/icon-recipeWrite-pencil.svg" alt="" />
        <input
          type="text"
          placeholder="레시피의 한줄평을 적어주세요"
          {...props.register("summary")}
        />
      </Menu.Summary>
      <Menu.Vegan>
        <Menu.VeganTypeHead>
          <img src="/img/recipeWrite/icon-recipeWrite-check.svg" alt="" />
          <span>가능한 채식 유형을 선택해주세요</span>
        </Menu.VeganTypeHead>
        <Menu.VeganTypeRadioWrapper types={props.selectType.types}>
          <input
            type="radio"
            name="types"
            value="VEGAN"
            id="vegan"
            checked={props.selectType.types === "VEGAN"}
            onChange={props.handleChange}
          />
          <label
            htmlFor="vegan"
            className={props.selectType.types === "VEGAN" ? "isActive" : ""}
          >
            비건
          </label>
          <input
            type="radio"
            name="types"
            value="OVO"
            id="ovo"
            checked={props.selectType.types === "OVO"}
            onChange={props.handleChange}
          />
          <label
            htmlFor="ovo"
            className={props.selectType.types === "OVO" ? "isActive" : ""}
          >
            오보
          </label>
          <input
            type="radio"
            name="types"
            value="LACTO"
            id="lacto"
            checked={props.selectType.types === "LACTO"}
            onChange={props.handleChange}
          />
          <label
            htmlFor="lacto"
            className={props.selectType.types === "LACTO" ? "isActive" : ""}
          >
            락토
          </label>
          <input
            type="radio"
            name="types"
            value="LACTO_OVO"
            id="lactoOvo"
            checked={props.selectType.types === "LACTO_OVO"}
            onChange={props.handleChange}
          />
          <label
            htmlFor="lactoOvo"
            className={props.selectType.types === "LACTO_OVO" ? "isActive" : ""}
          >
            락토오보
          </label>
          <input
            type="radio"
            name="types"
            value="PESCO"
            id="pesco"
            checked={props.selectType.types === "PESCO"}
            onChange={props.handleChange}
          />
          <label
            htmlFor="pesco"
            className={props.selectType.types === "PESCO" ? "isActive" : ""}
          >
            페스코
          </label>
          <input
            type="radio"
            name="types"
            value="POLLO"
            id="pollo"
            checked={props.selectType.types === "POLLO"}
            onChange={props.handleChange}
          />
          <label
            htmlFor="pollo"
            className={props.selectType.types === "POLLO" ? "isActive" : ""}
          >
            폴로
          </label>
        </Menu.VeganTypeRadioWrapper>
      </Menu.Vegan>

      <Menu.RecipeInfoWrapper>
        <Menu.RecipeInfoItem>
          <Menu.RecipeInfoTop>
            <img src="/img/recipeDetail/icon-stopwatch.svg" alt="" />
            <span>조리시간</span>
          </Menu.RecipeInfoTop>
          <Menu.RecipeInfoBottom>
            <Menu.RecipeInfoInput>
              <span>약</span>
              <input
                style={{ textAlign: "center" }}
                type="number"
                placeholder="2"
                defaultValue={3}
                min={1}
                {...props.register("cookTime")}
              />
              <span>분</span>
            </Menu.RecipeInfoInput>
          </Menu.RecipeInfoBottom>
        </Menu.RecipeInfoItem>

        <Menu.RecipeInfoItem>
          <Menu.RecipeInfoTop>
            <img src="/img/recipeDetail/icon-star.svg" alt="" />
            <span>난이도</span>
          </Menu.RecipeInfoTop>
          <Menu.RecipeInfoBottom>
            <select {...props.register("level")}>
              <option value="선택" disabled>
                선택
              </option>
              <option value="SIMPLE">쉬움</option>
              <option value="NORMAL">보통</option>
              <option value="DIFFICULT">어려움</option>
            </select>
          </Menu.RecipeInfoBottom>
        </Menu.RecipeInfoItem>

        <Menu.RecipeInfoItem>
          <Menu.RecipeInfoTop>
            <img src="/img/recipeDetail/icon-smile.svg" alt="" />
            <span>분량</span>
          </Menu.RecipeInfoTop>
          <Menu.RecipeInfoBottom>
            <Menu.RecipeInfoInput>
              <input
                type="number"
                placeholder="0"
                defaultValue={1}
                min={1}
                {...props.register("serve")}
              />
              <span>인분</span>
            </Menu.RecipeInfoInput>
          </Menu.RecipeInfoBottom>
        </Menu.RecipeInfoItem>
      </Menu.RecipeInfoWrapper>

      <Menu.TagsWrapper>
        <Menu.TagHead>
          <img src="/img/recipeWrite/icon-recipeWrite-pencil.svg" alt="" />
          <input
            type="text"
            placeholder="태그를 입력하고 스페이스바를 눌러주세요."
            onKeyUp={props.onKeyUpHash}
          />
        </Menu.TagHead>
        <Menu.Tags>
          {props.hashArr.map((el, idx) => (
            <Menu.Tag key={uuidv4()} onClick={props.onClickDeleteTag(el)}>
              {el}
            </Menu.Tag>
          ))}
        </Menu.Tags>
      </Menu.TagsWrapper>
    </Menu.Container>
  );
}
