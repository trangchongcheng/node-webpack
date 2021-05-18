import mongoose  from'mongoose';

const {Schema} = mongoose;
const TodoSchema = Schema({
  name: String
})

export default mongoose.model("Todos", TodoSchema, "Todos");
